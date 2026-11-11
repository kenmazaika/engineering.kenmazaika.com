#!/usr/bin/env node
/**
 * Build-time image pipeline.
 *
 * Generates width-appropriate AVIF + WebP variants for every raster image that
 * a blog post references from `public/`, and writes a manifest the rehype
 * plugin uses to emit <picture> markup. Idempotent: a variant set is regenerated
 * only when the source file changes (sha256 of contents).
 *
 * Heroes are handled natively by Astro's <Picture> in BlogPost.astro; this
 * covers in-body images (screenshots, charts, figures).
 */
import fs from 'node:fs/promises';
import { statSync } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import sharp from 'sharp';

const ROOT = process.cwd();
const CONTENT_DIR = path.join(ROOT, 'src/content/blog');
const PUBLIC_DIR = path.join(ROOT, 'public');
const OUT_ROOT = path.join(PUBLIC_DIR, '_img');
const MANIFEST_PATH = path.join(ROOT, 'src/generated/inline-images.json');
const PUBLIC_URL_PREFIX = '/_img';

// Content column is ~720 CSS px wide; 1440 covers 2x DPR. Never ship more.
const WIDTHS = [480, 768, 1080, 1440];
const RASTER_RE = /\.(png|jpe?g)$/i;
const REF_RE = /!\[[^\]]*\]\((\/[^)\s"]+\.(?:png|jpe?g))\)/gi;
const IMG_TAG_RE = /<img\b[^>]*\bsrc\s*=\s*["'](\/[^"']+\.(?:png|jpe?g))["'][^>]*>/gi;

async function collectRefs() {
  const files = (await fs.readdir(CONTENT_DIR)).filter((f) => /\.(md|mdx)$/.test(f));
  const refs = new Set();
  for (const file of files) {
    const raw = await fs.readFile(path.join(CONTENT_DIR, file), 'utf8');
    for (const re of [REF_RE, IMG_TAG_RE]) {
      re.lastIndex = 0;
      let m;
      while ((m = re.exec(raw))) refs.add(decodeURIComponent(m[1]));
    }
  }
  return [...refs].sort();
}

const sha = (buf) => crypto.createHash('sha256').update(buf).digest('hex').slice(0, 16);

async function loadManifest() {
  try {
    return JSON.parse(await fs.readFile(MANIFEST_PATH, 'utf8'));
  } catch {
    return {};
  }
}

async function main() {
  const refs = await collectRefs();
  const previous = await loadManifest();
  const manifest = {};
  let generated = 0;
  let skipped = 0;
  let missing = 0;

  for (const url of refs) {
    if (!RASTER_RE.test(url)) continue;
    const srcPath = path.join(PUBLIC_DIR, url);
    let src;
    try {
      src = await fs.readFile(srcPath);
    } catch {
      missing += 1;
      console.warn(`  ! missing: ${url}`);
      continue;
    }
    const hash = sha(src);
    const prev = previous[url];
    if (prev && prev.hash === hash) {
      const allExist = prev.variants.every(
        (v) => fsExtraExists(path.join(PUBLIC_DIR, v.avif)) && fsExtraExists(path.join(PUBLIC_DIR, v.webp)),
      );
      // Cheap existence check via already-computed flags (sync stat below).
      if (allExist) {
        manifest[url] = prev;
        skipped += 1;
        continue;
      }
    }

    let meta;
    try {
      meta = await sharp(src).metadata();
    } catch (err) {
      console.warn(`  ! unreadable: ${url} (${err.message})`);
      continue;
    }
    const intrinsic = meta.width ?? 1440;
    const targets = [...new Set(WIDTHS.filter((w) => w < intrinsic).concat(Math.min(intrinsic, 1440)))].sort(
      (a, b) => a - b,
    );

    const rel = url.replace(/^\//, '').replace(/\.[^.]+$/, '');
    const outDir = path.join(OUT_ROOT, rel);
    await fs.mkdir(outDir, { recursive: true });

    const variants = [];
    for (const width of targets) {
      const base = sharp(src).rotate().resize({ width, withoutEnlargement: true });
      const avifName = `w-${width}.avif`;
      const webpName = `w-${width}.webp`;
      await base.clone().avif({ quality: 50, effort: 4 }).toFile(path.join(outDir, avifName));
      await base.clone().webp({ quality: 72, effort: 4 }).toFile(path.join(outDir, webpName));
      generated += 2;
      variants.push({
        w: width,
        avif: `${PUBLIC_URL_PREFIX}/${rel}/${avifName}`,
        webp: `${PUBLIC_URL_PREFIX}/${rel}/${webpName}`,
      });
    }

    manifest[url] = {
      hash,
      width: intrinsic,
      height: meta.height ?? Math.round(intrinsic * 0.5625),
      variants,
    };
  }

  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  const ordered = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)));
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(ordered, null, 2) + '\n');

  const bytes = await dirSize(OUT_ROOT);
  console.log(
    `images: ${Object.keys(ordered).length} referenced, ${skipped} cached, ${generated} variants written, ${missing} missing (${(
      bytes /
      1024 /
      1024
    ).toFixed(1)} MB in /_img)`,
  );
}

function fsExtraExists(p) {
  try {
    return statSync(p).size > 0;
  } catch {
    return false;
  }
}

async function dirSize(dir) {
  let total = 0;
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) total += await dirSize(p);
      else total += (await fs.stat(p)).size;
    }
  } catch {}
  return total;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
