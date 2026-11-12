#!/usr/bin/env node
/**
 * Build-time canonical guard.
 *
 * Fails the build if any page's canonical/og:url, the sitemap, or robots.txt
 * points anywhere except the canonical origin. This is the cheap check that
 * catches a wrong `site` config or a hardcoded legacy domain before deploy.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const DIST = path.join(process.cwd(), 'dist');
const CANON = 'https://notesfromtheloop.com';
const errors = [];

async function walk(dir, out = []) {
  for (const e of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) await walk(p, out);
    else out.push(p);
  }
  return out;
}

const files = await walk(DIST).catch(() => []);
for (const file of files) {
  const rel = path.relative(DIST, file);
  if (file.endsWith('.html')) {
    const html = await fs.readFile(file, 'utf8');
    for (const m of html.matchAll(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/gi)) {
      if (!m[1].startsWith(CANON)) errors.push(`${rel}: canonical ${m[1]}`);
    }
    for (const m of html.matchAll(/<meta[^>]+property="og:url"[^>]+content="([^"]+)"/gi)) {
      if (!m[1].startsWith(CANON)) errors.push(`${rel}: og:url ${m[1]}`);
    }
  }
  if (/sitemap.*\.xml$/.test(file)) {
    const xml = await fs.readFile(file, 'utf8');
    for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      if (!m[1].startsWith(CANON)) errors.push(`${rel}: loc ${m[1]}`);
    }
  }
  if (rel === 'robots.txt') {
    const txt = await fs.readFile(file, 'utf8');
    for (const line of txt.split('\n')) {
      if (/^Sitemap:/i.test(line) && !line.includes(`${CANON}/`)) errors.push(`robots.txt: ${line}`);
    }
  }
}

if (errors.length) {
  console.error('canonical: FAILED');
  for (const e of errors.slice(0, 25)) console.error(`  ${e}`);
  process.exit(1);
}
console.log('canonical: OK — every canonical, sitemap loc, and robots entry uses notesfromtheloop.com');
