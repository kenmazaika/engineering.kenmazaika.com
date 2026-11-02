// Personal name. Stays on the masthead, bylines, and author schema — the
// publication name in SITE_NAME sits around it, it does not replace it.
export const SITE_TITLE = 'Ken Mazaika';
// Publication name used in metadata, RSS, and the footer.
export const SITE_NAME = 'Notes from the Loop';
// Homepage-only <title> (the <title> Google shows for the site root).
// SITE_TITLE stays the site NAME: header, footer, og:site_name, JSON-LD, title suffixes.
export const SITE_HOME_TITLE = 'OpenClaw & Hermes in Practice | Notes from the Loop';
// Positioning line. Appears as the homepage kicker and in publication metadata.
export const SITE_TAGLINE = 'Real-World OpenClaw & Hermes Workflows';
// TEMPORARY kill switch for the sitewide slide-up / exit-intent newsletter popup.
// Off for the Kagi Small Web submission (its rules forbid newsletter popups; the
// submission is gated on a popup-free site). A cron job turns this back ON on
// 2026-10-22. While false, no post renders the popup regardless of its frontmatter.
export const POPUP_ENABLED = false;
export const SITE_DESCRIPTION =
	'Practical guides to building and running AI agents with OpenClaw and Hermes. Explore real workflows, Obsidian integrations, automation, memory, and costs.';
// The author entity keeps its own description; the publication description above
// is what search engines and the WebSite schema should see.
export const AUTHOR_DESCRIPTION =
	"Engineering manager documenting real AI-agent workflows, model choices, and operating costs.";
// Slugs of hidden posts that must never appear in the sitemap.
export const HIDDEN_SLUGS = ['hermes-kit'];
// Path prefixes of hidden standalone pages that must never appear in the sitemap.
export const HIDDEN_PATHS = [];

// Search engines truncate around 60 characters. The publication name is added only
// when it fits without pushing the query-bearing part out of the visible title.
export function withPublication(title: string): string {
	const suffix = ` — ${SITE_NAME}`;
	return title.length + suffix.length <= 60 ? `${title}${suffix}` : title;
}
