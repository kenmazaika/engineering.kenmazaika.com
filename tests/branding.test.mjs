import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');

async function exists(file) {
  try {
    await stat(path.join(root, file));
    return true;
  } catch {
    return false;
  }
}

test('the production site uses the loop identity in favicon and header', async () => {
  const favicon = await readFile(path.join(root, 'public/favicon.svg'), 'utf8');
  const header = await readFile(path.join(root, 'src/components/Header.astro'), 'utf8');

  assert.match(favicon, /aria-label="Notes from the Loop"/);
  assert.match(favicon, /#6d28d9/);
  assert.match(header, /class="site-mark"/);
  assert.match(header, /<svg/);
  assert.doesNotMatch(header, />K</);
  assert.equal(await exists('public/favicon.ico'), true);
  assert.equal(await exists('public/apple-touch-icon.png'), true);
});

test('the apple touch icon is square and carries the purple brand color', async () => {
  const { data, info } = await sharp(path.join(root, 'public/apple-touch-icon.png'))
    .removeAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  assert.equal(info.width, info.height, 'icon should be square');
  let purple = 0;
  for (let i = 0; i < data.length; i += info.channels) {
    const [r, g, b] = data.subarray(i, i + 3);
    if (b > 120 && r < 140 && g < 90) purple += 1;
  }
  assert.ok(purple > 1000, `expected purple pixels, found ${purple}`);
});

function pngDimensions(buffer) {
  assert.equal(buffer.toString('ascii', 1, 4), 'PNG');
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

test('every article and the site default have generated 1200x630 Open Graph cards', async () => {
  const sourceFiles = (await readdir(path.join(root, 'src/content/blog')))
    .filter((name) => /\.(md|mdx)$/.test(name));
  const expected = ['default.png', ...sourceFiles.map((name) => name.replace(/\.(md|mdx)$/, '.png'))];

  for (const filename of expected) {
    const image = await readFile(path.join(root, 'public/og', filename));
    assert.deepEqual(pngDimensions(image), { width: 1200, height: 630 }, filename);
  }

  const packageJson = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
  assert.match(packageJson.scripts.build, /generate:og/);
  assert.equal(await exists('scripts/generate-og.mjs'), true);
});

test('article pages expose generated OG cards and complete social metadata', async () => {
  const baseHead = await readFile(path.join(root, 'src/components/BaseHead.astro'), 'utf8');
  const blogPost = await readFile(path.join(root, 'src/layouts/BlogPost.astro'), 'utf8');
  const route = await readFile(path.join(root, 'src/pages/blog/[...slug].astro'), 'utf8');
  const schema = await readFile(path.join(root, 'src/content.config.ts'), 'utf8');

  assert.match(schema, /socialTitle:\s*z\.string\(\)\.optional\(\)/);
  assert.match(schema, /ogCategory:\s*z\.string\(\)\.optional\(\)/);
  assert.match(route, /slug=\{post\.id\}/);
  assert.match(blogPost, /`\/og\/\$\{slug\}\.png`/);
  assert.match(blogPost, /type="article"/);
  assert.match(baseHead, /og:image:width/);
  assert.match(baseHead, /og:image:height/);
  assert.match(baseHead, /og:image:alt/);
  assert.match(baseHead, /twitter:title/);
  assert.match(baseHead, /twitter:description/);
  assert.match(baseHead, /twitter:image/);
  assert.match(baseHead, /apple-touch-icon/);
});
