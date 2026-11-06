import path from 'node:path';
import { INLINE_CTAS } from './inline-ctas.mjs';

// Insert one editorial CTA after the first paragraph of the second H2 section.
// Skips a post that already links to the same destination.
export default function rehypeInlineCta() {
  return (tree, file) => {
    const slug = path.basename(file?.path || '').replace(/\.(md|mdx)$/, '');
    const cta = INLINE_CTAS[slug];
    if (!cta || !Array.isArray(tree.children)) return;

    const already = JSON.stringify(tree).includes(`"href":"${cta.href}"`);
    if (already) return;

    const kids = tree.children;
    let h2Count = 0;
    let insertAt = kids.length;
    for (let i = 0; i < kids.length; i++) {
      if (kids[i].tagName === 'h2') {
        h2Count += 1;
        if (h2Count === 2) {
          for (let j = i + 1; j < kids.length; j++) {
            if (kids[j].tagName === 'p') { insertAt = j + 1; break; }
          }
          break;
        }
      }
    }

    const node = {
      type: 'element',
      tagName: 'p',
      properties: { className: ['inline-cta'] },
      children: [
        { type: 'text', value: cta.before },
        { type: 'element', tagName: 'a', properties: { href: cta.href }, children: [{ type: 'text', value: cta.link }] },
        { type: 'text', value: cta.after },
      ],
    };
    kids.splice(insertAt, 0, node);
  };
}
