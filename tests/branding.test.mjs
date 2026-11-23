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

function imageDimensions(buffer) {
  if (buffer.toString('ascii', 1, 4) === 'PNG') {
    return { format: 'png', width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }
  // JPEG SOF0/SOF2 marker carries the frame dimensions.
  assert.equal(buffer[0], 0xff, 'expected a JPEG or PNG buffer');
  assert.equal(buffer[1], 0xd8, 'expected a JPEG SOI marker');
  let offset = 2;
  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    if (marker >= 0xc0 && marker <= 0xc3) {
      return { format: 'jpeg', height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    offset += 2 + length;
  }
  throw new Error('could not read JPEG dimensions');
}

test('every article and the site default have generated 1200x630 Open Graph cards', async () => {
  const sourceFiles = (await readdir(path.join(root, 'src/content/blog')))
    .filter((name) => /\.(md|mdx)$/.test(name));
  const expected = ['default.jpg', ...sourceFiles.map((name) => name.replace(/\.(md|mdx)$/, '.jpg'))];

  for (const filename of expected) {
    const image = await readFile(path.join(root, 'public/og', filename));
    const { format, width, height } = imageDimensions(image);
    assert.equal(format, 'jpeg', `${filename} should ship as JPEG, not PNG`);
    assert.deepEqual({ width, height }, { width: 1200, height: 630 }, filename);
    assert.ok(image.length < 600 * 1024, `${filename} is ${(image.length / 1024).toFixed(0)} KB — over the 600 KB social preview budget`);
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
  assert.match(blogPost, /`\/og\/\$\{slug\}\.jpg`/);
  assert.match(blogPost, /type="article"/);
  assert.match(baseHead, /og:image:width/);
  assert.match(baseHead, /og:image:height/);
  assert.match(baseHead, /og:image:alt/);
  assert.match(baseHead, /twitter:title/);
  assert.match(baseHead, /twitter:description/);
  assert.match(baseHead, /twitter:image/);
  assert.match(baseHead, /apple-touch-icon/);
});
