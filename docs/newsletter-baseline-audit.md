# Newsletter signup — baseline audit

Date: 2026-11-01. Source: repository at `main` (29fd3a4) and the deployed site.
Verified findings are marked **[verified]**; hypotheses are marked **[hypothesis]**.

## Integration

- **[verified]** All signup forms are native HTML `<form method="post">` posts to
  `https://buttondown.com/api/emails/embed-subscribe/mazaika` with a hidden
  `embed=1`. No iframe, no web component, no JavaScript fetch. Submission and
  double opt-in stay entirely inside Buttondown.
- **[verified]** The sitewide popup (`NewsletterPopup.astro`) uses the same endpoint
  with `tag=jdak`, which is the trigger for the 7-day vault course automation.
  `POPUP_ENABLED = false` in `src/consts.ts`, so no post renders it today.
- **[verified]** No `metadata__*` fields are used. Buttondown documents subscriber
  metadata as a paid-plan feature, so attribution should not depend on it.

## Current placements

| Page | Forms | Copy |
| --- | --- | --- |
| Homepage | 1 (bottom, after archive) | "Get the next field note." |
| Start Here | 3 (hero, mid-page, end) | "New receipts, weekly-ish. One email, no newsletter noise." |
| Articles | 1 (after the post, before related) | "Get the next field note." |
| Blog archive | 0 | — |
| Header / nav | 0 | — |

**[verified]** Article forms render after related reading and before the article
footer, so on a long post the only ask sits below several screens of content.
**[verified]** Start Here repeats three visually similar forms with identical
copy, and its hero form competes with the primary "Follow on X" CTA.
**[verified]** There is no subscribe destination in the header or footer nav, so a
reader who decides mid-article has no persistent path to the offer.

## Offer

- **[verified]** The promise is abstract: "Get the next field note" and "New field
  notes from running AI agents, plus occasional long-form engineering essays."
  It does not say what arrives, how often, or why it is different from the blog.
- **[verified]** The strongest differentiator already exists on the site — measured
  costs, failed attempts, copyable prompts — but none of it appears in the signup
  copy.
- **[hypothesis]** Specificity ("the cost", "what broke", "most Sundays") should
  raise submit rate among readers who already trust the writing.

## Measurement

- **[verified]** GA4 (`G-KYMS6PB7XC`) is loaded globally in `BaseHead.astro`. No
  newsletter events exist: no form view, no submit, no confirmed event.
- **[verified]** Therefore newsletter conversion is currently unmeasurable on-site.
  Buttondown's subscriber list is the only record, with no placement attribution.
- **[verified]** Confirmation happens off-site after the embed POST. A static site
  cannot observe it; any "confirmed" event fired on submit would be false.

## Friction and accessibility

- **[verified]** Each form has a label and an `autocomplete="email"` input, and the
  email input is `required` — native validation is intact.
- **[verified]** On Start Here, three forms on one page previously required three
  distinct ids (`email-hero`, `email-mid`, `email-end`); this is preserved.
- **[verified]** Mobile: `.newsletter-fields` stacks below 520px. No overflow found
  at 390px in the pre-change build.
- **[hypothesis]** The two-column signup block squeezes the input on narrow
  desktop widths when the CTA label is long (observed on `/subscribe/` during this
  iteration, fixed with a stacked variant).

## What this iteration changes

1. One reusable component with a single offer, configured per placement.
2. Homepage: a signup directly under the hero, above the featured post.
3. Articles: a contextual inline signup after the second section of long reads
   (≥8 min), skipping placements that would split a code sample.
4. Header and footer: a persistent "Subscribe" route to `/subscribe/`.
5. Start Here: three forms reduced to two, with the middle one becoming a link.
6. GA4: `newsletter_form_view` and `newsletter_form_submit`, both carrying
   `placement`, `page_path`, `page_type`, `content_category`. No PII.
7. Buttondown: one hidden `tag=nl-<placement>` per form for confirmed-subscriber
   attribution. `newsletter_signup_confirmed` is deliberately not emitted.

## Verification performed

- `npm run build` — 37 pages, no errors.
- Duplicate-id scan on `/`, `/start/`, `/subscribe/`, one article — none.
- Desktop (1440px) and mobile (390px) screenshots of homepage, Start Here,
  `/subscribe/`, and an article.
- Buttondown submission path unchanged: native POST, no fetch, no provider change.
