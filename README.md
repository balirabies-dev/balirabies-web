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

The canonical domain defaults to `https://www.balirabies.com`. Set
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

After deployment, submit `https://www.balirabies.com/sitemap.xml` in Google Search
Console and measure the deployed homepage with PageSpeed Insights. A successful
build does not measure real-user Core Web Vitals or guarantee search rankings.

## Missing pages

The 404 page reuses the Bali background with a centered message and home link.
`app/global-not-found.tsx` handles unmatched URLs through Next.js's experimental
`globalNotFound` option, which is needed for the language-based root layout.
The browser selects English or Indonesian from the URL; the global fallback
initially renders English on the server. Missing pages return HTTP 404 with
`noindex`. Registered languages remain the only valid root segments.

## Google Analytics

The shared layout loads GA4 with measurement ID `G-ZERQ4TC868` after hydration.
Set `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID` to override it; set it to an empty value to
disable analytics. It runs only in production builds served over HTTPS on the
configured canonical hostname and `balirabies.com` (including their `www` variants). Localhost, other
hostnames, development, and Vercel previews do not load the Google tag. Analytics
is independent of the search-indexing launch flag.

In the GA4 web stream, enable **Enhanced measurement → Page views → Page changes
based on browser history events**. The integration uses Google's automatic
history tracking for Next.js navigation; it does not send additional manual
`page_view` events. Google Signals and advertising personalization signals are
disabled. No custom questionnaire or form-answer events are sent.

After deployment, use GA4 Realtime or DebugView to confirm that the initial page
and subsequent navigation are recorded once. The privacy copy is updated in both
languages to describe production analytics.

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
