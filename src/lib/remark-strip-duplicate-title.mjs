// Strip a leading Markdown H1 when it duplicates the post's frontmatter title.
// The BlogPost layout already renders the title as the page H1, so a body H1
// repeats it (and breaks the visual hierarchy).
//
// Scope is deliberately narrow: only the first content node, only H1, and only
// when its text equals the frontmatter title.

function text(node) {
  if (!node) return '';
  if (node.type === 'text') return node.value || '';
  if (Array.isArray(node.children)) return node.children.map(text).join('');
  return '';
}

function frontmatterTitle(file) {
  const fromAstro = file?.data?.astro?.frontmatter?.title;
  if (typeof fromAstro === 'string' && fromAstro.trim()) return fromAstro;
  const raw = String(file?.value || '');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return '';
  const title = m[1].match(/^title:\s*(.+)$/m);
  if (!title) return '';
  return title[1].trim().replace(/^['"]|['"]$/g, '');
}

export function remarkStripDuplicateTitle() {
  return (tree, file) => {
    const title = frontmatterTitle(file).trim();
    if (!title) return;
    const idx = tree.children.findIndex((n) => n.type !== 'yaml' && n.type !== 'toml');
    if (idx < 0) return;
    const node = tree.children[idx];
    if (node.type !== 'heading' || node.depth !== 1) return;
    if (text(node).trim() !== title) return;
    tree.children.splice(idx, 1);
  };
}
