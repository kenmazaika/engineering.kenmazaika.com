// Personal name. Stays on the masthead, bylines, and author schema — the
// publication name in SITE_NAME sits around it, it does not replace it.
export const SITE_TITLE = 'Ken Mazaika';
// Publication name used in metadata, RSS, and the footer.
export const SITE_NAME = 'Notes from the Loop';
// Homepage-only <title> (the <title> Google shows for the site root).
// SITE_TITLE stays the site NAME: header, footer, og:site_name, JSON-LD, title suffixes.
export const SITE_HOME_TITLE = 'Notes from the Loop — running AI agents with OpenClaw and Hermes';
// TEMPORARY kill switch for the sitewide slide-up / exit-intent newsletter popup.
// Off for the Kagi Small Web submission (its rules forbid newsletter popups; the
// submission is gated on a popup-free site). A cron job turns this back ON on
// 2026-10-22. While false, no post renders the popup regardless of its frontmatter.
export const POPUP_ENABLED = false;
export const SITE_DESCRIPTION = "Field notes on running AI agents for real work — workflows, model choices, costs, and receipts. Plus long-form essays on measuring AI's impact and why rearchitectures fail.";
// Slugs of hidden posts that must never appear in the sitemap.
export const HIDDEN_SLUGS = ['hermes-kit'];
// Path prefixes of hidden standalone pages that must never appear in the sitemap.
export const HIDDEN_PATHS = [];
