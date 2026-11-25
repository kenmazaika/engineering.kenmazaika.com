import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { basename, extname, join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const contentDir = join(root, 'src/content/blog');
const routesSource = readFileSync(join(root, 'src/lib/popup-routes.ts'), 'utf8');
const layoutSource = readFileSync(join(root, 'src/layouts/BlogPost.astro'), 'utf8');

const routedSlugs = new Set(
  [...routesSource.matchAll(/^\s*'([^']+)':\s*'(?:start|obsidian|general)',?$/gm)].map((match) => match[1]),
);

const missingRoutes = readdirSync(contentDir)
  .filter((file) => ['.md', '.mdx'].includes(extname(file)))
  .filter((file) => {
    const source = readFileSync(join(contentDir, file), 'utf8');
    const frontmatter = source.match(/^---\n([\s\S]*?)\n---/);
    assert.ok(frontmatter, `${file} should have frontmatter`);
    return !/^hidden:\s*true\s*$/m.test(frontmatter[1])
      && !/^showPopup:\s*false\s*$/m.test(frontmatter[1]);
  })
  .map((file) => basename(file, extname(file)))
  .filter((slug) => !routedSlugs.has(slug));

assert.deepEqual(
  missingRoutes,
  [],
  `Public posts need a popup campaign or an explicit showPopup: false opt-out: ${missingRoutes.join(', ')}`,
);
assert.match(
  layoutSource,
  /POPUP_ENABLED\s*&&\s*showPopup\s*&&\s*popupCampaign\s*!==\s*'none'/,
  'BlogPost must honor the showPopup: false opt-out',
);

console.log(`All ${routedSlugs.size} popup routes cover every non-opted-out public post.`);
