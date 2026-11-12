import type { APIRoute } from 'astro';

// robots.txt is generated from `site` so the sitemap URL always matches the
// domain actually serving the build. A hardcoded copy in public/ would keep
// pointing at the old host after the migration to notesfromtheloop.com.
export const GET: APIRoute = ({ site }) => {
	const base = site ?? new URL('https://notesfromtheloop.com');
	const sitemap = new URL('sitemap-index.xml', base).href;
	const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
};
