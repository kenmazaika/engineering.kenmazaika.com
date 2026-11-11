## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Images (automatic)

Heroes and in-body images are optimized by the build — do not hand-resize files.

- `src/assets/headers/*` heroes render through `getImage()` in `src/layouts/BlogPost.astro`: AVIF + WebP `srcset` at 640/960/1280/1600/2000, JPEG fallback, `fetchpriority="high"`.
- In-body images referenced from `/public` go through `scripts/optimize-images.mjs` (prebuild) + `src/lib/rehype-responsive-images.mjs`, which emits `<picture>` with 480/768/1080/1440 variants.
- `scripts/check-image-budget.mjs` runs after `astro build` and **fails the build** on any image asset over 600 KB or any page over 2.5 MB of image weight.
- Deploy with `npm run deploy` (build + gate + `wrangler deploy`), never a bare `wrangler deploy`.
- New variants are cached by source hash in `src/generated/inline-images.json`; delete it plus `public/_img/` to force a rebuild.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
