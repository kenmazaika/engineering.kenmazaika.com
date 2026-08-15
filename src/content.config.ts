import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			socialTitle: z.string().optional(),
			ogCategory: z.string().optional(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			hideDefaultNewsletter: z.boolean().optional(),
			// Hidden posts exist at their direct URL but are excluded from the
			// index, RSS feed, and sitemap (used for tests and staged launches).
			hidden: z.boolean().optional(),
			// Opt a post into the slide-up / exit-intent newsletter popup.
			showPopup: z.boolean().optional(),
			// Popup mode: 'email' (Buttondown capture) or 'link' (CTA to a post).
			popupMode: z.enum(['email', 'link']).optional(),
			popupHref: z.string().optional(),
			popupTitle: z.string().optional(),
			popupCopy: z.string().optional(),
			popupCta: z.string().optional(),
		}),
});

export const collections = { blog };
