# Newsletter measurement — what the numbers mean

Last updated: 2026-11-01.

The site is static and the newsletter is Buttondown. Two systems hold the truth, and
they measure different things. Do not add them together.

## Attempts — GA4 (on-site, client-side)

| Event | Fires when | Not |
| --- | --- | --- |
| `newsletter_form_view` | A signup form is ≥50% visible for 1 second, once per placement per page load | A scroll past, a popup impression, or a bot |
| `newsletter_form_submit` | The browser accepts the form as valid and the native `submit` event fires | A button click on an invalid form, or a completed subscription |

Parameters on both: `placement`, `page_path`, `page_type`, `content_category`.
No email address, name, or any other personal data is ever sent to GA4.

Placements in use: `homepage_strip`, `article_footer`, `blog_index`, `start_here`,
`start_here_end`, `subscribe_page`, `popup_course`.

**`newsletter_signup_confirmed` is not emitted by the website.** With Buttondown's
embed form the visitor leaves the page to confirm by email; a static site cannot
observe that. Firing it on submit would count attempts as subscribers. If it is
ever emitted, it must come from a server-side source that has verified the
subscription (Buttondown webhook → Cloudflare Function → GA4 Measurement Protocol),
and must carry the same `placement` parameter.

## Confirmed subscriptions — Buttondown (server-side of truth)

Every site form now posts a hidden `tag` field:

```
tag = nl-<placement>     e.g. nl-homepage_hero, nl-article_footer
```

The popup keeps `tag=jdak` because that tag triggers the 7-day vault course
automation.

To count confirmed subscribers by placement:

1. Buttondown → Subscribers → filter by the `nl-<placement>` tag.
2. Set the date range to the comparable window.
3. Count **active** subscribers only — exclude unsubscribed and bounced.

Caveat: Buttondown tags are additive across subscribe events; a person who
subscribes twice may carry two placement tags. Tags answer "which placements
produced a subscriber", not "unique first touch".

### Buttondown plan limits

- **Tags**: available on all plans. This is why attribution uses tags.
- **Subscriber metadata** (`metadata__*` hidden fields): a paid-plan feature. Do
  not depend on it until the plan is confirmed to include it; the site does not
  use metadata for attribution.
- **UTMs**: not carried through the embed form POST. Treat UTM data as
  page-level only, not subscriber-level.

## Report definition

Produce this weekly, per placement, for the same window:

| Field | Source | Formula |
| --- | --- | --- |
| Sessions | GA4 | Sessions on the page(s) hosting the placement |
| Form views | GA4 | `newsletter_form_view` count |
| Submit attempts | GA4 | `newsletter_form_submit` count |
| Confirmed subscriptions | Buttondown | Active subscribers carrying `nl-<placement>` |
| View rate | derived | form views ÷ sessions |
| Submit rate | derived | submit attempts ÷ form views |
| Confirm rate | derived | confirmed ÷ submit attempts |
| End-to-end conversion | derived | confirmed ÷ sessions |

Read it as a funnel. A high submit rate with a low confirm rate is a deliverability
or double-opt-in problem, not a copy problem. A low view rate is a placement
problem. A low submit rate at a high view rate is a copy or trust problem.

## Known gaps

- No per-article attribution beyond `article_footer` / `article_inline` plus
  `page_path` in GA4. Buttondown tags cannot distinguish individual posts.
- Confirmed counts are manual (Buttondown UI/export) until a webhook is wired.
- Bot traffic inflates sessions, not submissions; prefer view-to-submit ratios
  over raw session conversion when a post gets syndicated.
