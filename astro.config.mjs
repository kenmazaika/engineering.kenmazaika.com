// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';

const oneLightTheme = JSON.parse(
  fs.readFileSync(path.resolve('./src/styles/one-light-custom.json'), 'utf-8')
);

// https://astro.build/config
export default defineConfig({
	site: 'https://engineering.kenmazaika.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: oneLightTheme,
		},
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: 'Atkinson',
			cssVariable: '--font-atkinson',
			fallbacks: ['sans-serif'],
			options: {
				variants: [
					{
						src: ['./src/assets/fonts/atkinson-regular.woff'],
						weight: 400,
						style: 'normal',
						display: 'swap',
					},
					{
						src: ['./src/assets/fonts/atkinson-bold.woff'],
						weight: 700,
						style: 'normal',
						display: 'swap',
					},
				],
			},
		},
	],
});
