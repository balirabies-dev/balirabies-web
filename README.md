# BaliRabies

A bilingual Next.js website with rabies information for travelers in Bali.
English uses unprefixed URLs; Indonesian uses `/id`. Contact and the dedicated
coming-soon page are placeholders.

## Development

```sh
npm install
npm run dev
npm run lint
npm run build
npm run start
```

## Search and deployment

The canonical domain defaults to `https://balirabies.id`. Set
`NEXT_PUBLIC_SITE_URL` to override it. Use the same production origin for every
language; English and Indonesian pages expose canonical URLs and reciprocal
`hreflang` links, including an English `x-default`.

Set `NEXT_PUBLIC_LAUNCH_READY=true` in the production deployment environment
when the site is ready for public indexing, then rebuild. Until then, pages emit
`noindex` and the sitemap is empty. Vercel preview deployments and localhost
remain non-indexable even when the launch flag is enabled. `robots.txt` allows
crawling so search engines can read these page-level directives.

Once indexing is enabled, `/sitemap.xml` lists eligible pages in both languages.
Contact, coming-soon, draft membership/terms, and the exposure-summary tool remain
`noindex` and excluded from the sitemap. Page metadata, social previews, and
structured breadcrumbs share the same canonical origin. Structured data describes
the website and visible breadcrumbs without claiming a verified clinic or team.

After deployment, submit `https://balirabies.id/sitemap.xml` in Google Search
Console and measure the deployed homepage with PageSpeed Insights. A successful
build does not measure real-user Core Web Vitals or guarantee search rankings.

## Images and fonts

Inter is self-hosted through `next/font`. The homepage hero is a resized 2880px
WebP derived from `public/images/bali.webp`; the original remains unchanged.
Both hero and placeholder images use static imports, responsive Next Image
variants, preloading, and content-hashed URLs for immutable caching.

If replacing the hero image, regenerate `app/assets/bali-hero.webp` from the new
source, keeping the same dimensions and compression target. Next Image optimizes
the final browser response separately.

Language catalog instructions: [app/lib/i18n/README.md](app/lib/i18n/README.md).

Original Bali photograph: Unsplash image `photo-1537996194471-e657df975ab4`.
License: https://unsplash.com/license.
