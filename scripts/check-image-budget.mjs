#!/usr/bin/env node
/**
 * Post-build image budget gate.
 *
 * Fails the build (and therefore the deploy) when a page ships an image asset
 * over the per-file budget or a page total over the per-page budget. This is
 * what stops a new 5.86 MB PNG from reaching production: the deploy pipeline
 * runs it automatically after `astro build`.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const DIST = path.join(process.cwd(), 'dist');
const MAX_FILE_BYTES = 600 * 1024; // 600 KB per image asset
const MAX_PAGE_BYTES = 2.5 * 1024 * 1024; // 2.5 MB unique images per page
const IMAGE_RE = /\.(png|jpe?g|webp|avif|gif)$/i;

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}

function extractImageUrls(html) {
  const direct = new Set();
  const candidates = new Set();
  const push = (set, u) => {
    if (!u || u.startsWith('data:') || /^https?:\/\//i.test(u)) return;
    const clean = u.split('?')[0].split('#')[0];
    if (IMAGE_RE.test(clean)) set.add(clean);
  };
  for (const m of html.matchAll(/\b(?:src|href)=["']([^"']+)["']/gi)) push(direct, m[1]);
  for (const m of html.matchAll(/\b(?:srcset|srcSet)=["']([^"']+)["']/gi)) {
    for (const part of m[1].split(',')) push(candidates, part.trim().split(/\s+/)[0]);
  }
  return { direct: [...direct], candidates: [...candidates] };
}

async function main() {
  let htmlFiles;
  try {
    htmlFiles = await walk(DIST);
  } catch {
    console.error('images: dist/ not found — build first');
    process.exit(1);
  }

  const sizeCache = new Map();
  async function sizeOf(url) {
    if (sizeCache.has(url)) return sizeCache.get(url);
    let size = 0;
    try {
      size = (await fs.stat(path.join(DIST, decodeURIComponent(url)))).size;
    } catch {}
    sizeCache.set(url, size);
    return size;
  }

  const offenders = [];
  const pageTotals = [];

  for (const file of htmlFiles) {
    const html = await fs.readFile(file, 'utf8');
    const { direct, candidates } = extractImageUrls(html);
    let total = 0;
    // Page weight = what a modern browser actually downloads: the fallback
    // <img src> for each picture plus any standalone image. srcset candidates
    // are alternates at other widths, so they are checked per-file but not
    // summed into the page total.
    for (const u of direct) {
      const size = await sizeOf(u);
      total += size;
      if (size > MAX_FILE_BYTES) offenders.push({ page: file, url: u, size });
    }
    for (const u of candidates) {
      const size = await sizeOf(u);
      if (size > MAX_FILE_BYTES) offenders.push({ page: file, url: u, size });
    }
    pageTotals.push({ page: file, total, count: direct.length });
  }

  const heavyPages = pageTotals.filter((p) => p.total > MAX_PAGE_BYTES).sort((a, b) => b.total - a.total);

  if (offenders.length || heavyPages.length) {
    console.error(`images: BUDGET FAILED`);
    for (const o of offenders.slice(0, 20)) {
      console.error(`  ${(o.size / 1024).toFixed(0)} KB  ${o.url}  (${path.relative(DIST, o.page)})`);
    }
    for (const p of heavyPages.slice(0, 10)) {
      console.error(`  page ${(p.total / 1024 / 1024).toFixed(2)} MB total  ${path.relative(DIST, p.page)}`);
    }
    console.error(
      `  limits: ${MAX_FILE_BYTES / 1024} KB per file, ${(MAX_PAGE_BYTES / 1024 / 1024).toFixed(1)} MB per page`,
    );
    process.exit(1);
  }

  const worst = pageTotals.sort((a, b) => b.total - a.total)[0];
  console.log(
    `images: OK — ${htmlFiles.length} pages, heaviest ${(worst.total / 1024 / 1024).toFixed(2)} MB (${path.relative(
      DIST,
      worst.page,
    )})`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
