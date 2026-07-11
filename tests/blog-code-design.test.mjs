import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
execFileSync('npm', ['run', 'build'], { cwd: root, stdio: 'pipe' });

const index = readFileSync(join(root, 'dist/index.html'), 'utf8');
assert.match(index, /\/blog\/capture-workflow\//);

const post = readFileSync(join(root, 'dist/blog/capture-workflow/index.html'), 'utf8');
assert.match(post, /Capture workflow: a reusable Hermes use case for work that contains your judgment/);
assert.match(post, /Wispr Dictation topic/);
assert.match(post, /~\/\.hermes\/dictations\/D-NNN\.md/);
assert.match(post, /One-shot output/);
assert.match(post, /Two-shot output/);
assert.match(post, /Operating rules/);
assert.match(post, /src="https:\/\/www\.youtube\.com\/embed\/aC45oifNNyI"/);
assert.match(post, /class="prose"/);
assert.match(post, /class="video-embed"/);

const layout = readFileSync(join(root, 'dist/blog/capture-workflow/index.html'), 'utf8');
assert.match(layout, /data-copy-button/);

console.log('Blog, code design, and video embed verified.');
