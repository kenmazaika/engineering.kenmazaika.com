import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
execFileSync('npm', ['run', 'build'], { cwd: root, stdio: 'pipe' });

const publicPosts = countPublicPosts(join(root, 'src/content/blog'));
const xml = readFileSync(join(root, 'dist/rss.xml'), 'utf8');
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((match) => match[1]);

assert.equal(items.length, publicPosts, 'RSS feed should carry every public post and nothing else');

const dates = items.map((item) => {
  const match = item.match(/<pubDate>(.*?)<\/pubDate>/);
  assert.ok(match, 'every RSS item should carry a pubDate');
  const time = Date.parse(match[1]);
  assert.ok(!Number.isNaN(time), `unparseable pubDate: ${match[1]}`);
  return time;
});

for (let i = 1; i < dates.length; i += 1) {
  assert.ok(
    dates[i - 1] >= dates[i],
    `RSS items must descend newest-first: item ${i} (${new Date(dates[i]).toISOString()}) is newer than item ${i - 1} (${new Date(dates[i - 1]).toISOString()})`,
  );
}

assert.equal(dates[0], Math.max(...dates), 'the first RSS item should be the newest post');
assert.equal(dates.at(-1), Math.min(...dates), 'the last RSS item should be the oldest post');

console.log(`RSS feed is chronological newest-first across ${items.length} public posts.`);

function countPublicPosts(dir) {
  let count = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      count += countPublicPosts(join(dir, entry.name));
      continue;
    }
    if (!/\.(md|mdx)$/.test(entry.name)) continue;
    const frontmatter = readFileSync(join(dir, entry.name), 'utf8').match(/^---\n([\s\S]*?)\n---/);
    if (!frontmatter) continue;
    if (/^hidden:\s*true\s*$/m.test(frontmatter[1])) continue;
    count += 1;
  }
  return count;
}
