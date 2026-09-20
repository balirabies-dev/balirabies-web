# BaliRabies public website

A complete, locally previewable Next.js 16 / React 19 public website based on GUIDE.MD. The existing App Router is retained for static content pages, shared layouts, metadata, and minimal client JavaScript. Only navigation, the educational questionnaire, and the preview form require client state.

## Run

```sh
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. If occupied, use `npm run dev -- --port 3002`.

```sh
npm run lint
npm run build
npm run start
```

Development and builds use Next's supported `--webpack` option: Turbopack's CSS processing could not bind its subprocess port in the local execution sandbox. No network font download is needed; the site uses the system Arial/Helvetica stack with a small Georgia accent. Images are local and delivered through Next Image.

## Implemented

- Coastal Teal homepage with Bali photography, services, care journey, membership introduction, educational resources, FAQs, and urgent-help entry point.
- All 21 requested public routes, including six animal/prevention articles, treatment pages, policy drafts, sources, contact, and membership.
- Six-step exposure guide with required choices, uncertainty options, preserved in-page answers, back/next, editable summary, restart, and print styles. No clinical scoring, risk classification, or treatment algorithm.
- Locally validated appointment-request preview; no false sent/booking success, storage, or network submission.
- Central contact/service/FAQ/membership configuration; membership concepts clearly marked as drafts with no invented prices.
- Responsive mobile navigation, keyboard focus, native FAQ accordions, reduced-motion support, metadata/canonicals, generated social image, sitemap, and robots controls.

## Configuration and integration status

`app/lib/site.ts` centralizes public contact settings, services, FAQs, sources, and draft plans. `app/lib/content.ts` holds article content and routes. `app/lib/questionnaire.ts` contains the question definitions, separate from the interface. `app/globals.css` defines semantic color tokens and responsive layouts.

- **Live locally:** pages, educational content, local validation, questionnaire, image optimization, metadata, and printing.
- **WhatsApp:** disconnected by default. Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to the verified international number, digits only, to enable general-message links. No exposure answers are inserted.
- **Email:** no address invented; set `NEXT_PUBLIC_CONTACT_EMAIL` to display a verified mailto link. This does not connect form delivery.
- **Requests/bookings:** always preview-only. Before enabling submissions, implement a server endpoint with server-side validation, consent handling, secure delivery/storage, rate limiting, retention rules, and error handling. Only acknowledge successful delivery after the service confirms it; never claim a booking is confirmed without a booking integration.
- **Payments, memberships, accounts, dashboards:** not implemented or offered as active services.
- **Search engines:** `NEXT_PUBLIC_LAUNCH_READY=false` defaults to noindex and disallow. Set the verified canonical domain in `NEXT_PUBLIC_SITE_URL` and enable indexing only after launch approval. This switch does not connect any integrations or approve draft content.
- **Analytics:** none installed. Questionnaire answers live only in React state and clear on reload/navigation away; no URL, browser storage, or analytics payload contains them. Print copies are controlled by the user.

## Client inputs required before launch

1. Approved logo and business identity; verified clinical team and credentials.
2. Real WhatsApp/email, operating hours, locations, coverage, home-visit rules, partner clinics, and service availability.
3. Clinical sign-off on educational copy, urgent instructions, and service descriptions. Current content cites WHO and does not claim clinician review.
4. Approved membership names, duration, benefits, exclusions, pricing, priority-support terms, activation rules, and separate treatment fees.
5. Data-controller details, approved privacy/terms, retention policy, and secure form-delivery/booking provider.
6. Production domain, hosting configuration, and explicit publication authorization.

## Verification

`npm run lint` and `npm run build` are the standard checks. `scripts/verify.cjs` provides browser checks using Playwright and axe-core: all public routes, 404 behavior, selected WCAG 2.2 AA scans, questionnaire interactions/privacy/print, form validation and absence of POST requests, keyboard accordion and skip link, three responsive widths, mobile navigation, image loading, and browser exceptions.

To run the browser checks without adding runtime dependencies:

```sh
npm install --prefix /tmp/balirabies-qa playwright @axe-core/playwright
QA_NODE_MODULES=/tmp/balirabies-qa/node_modules \
TEST_URL=http://localhost:3000 \
node scripts/verify.cjs
```

Chrome defaults to its macOS application path; override `CHROME_PATH` if necessary. Screenshots are written to `/private/tmp/balirabies-desktop.png` and `/private/tmp/balirabies-mobile.png`. Automated scans supplement manual layout inspection; they are not a full accessibility certification.

## Sources and assets

Medical reference links and real access dates appear on `/sources` and educational articles. References: [WHO rabies](https://www.who.int/news-room/fact-sheets/detail/rabies), [WHO vaccination guidance](https://www.who.int/teams/control-of-neglected-tropical-diseases/rabies/vaccinations-and-immunization), and [WHO animal bites](https://www.who.int/news-room/fact-sheets/detail/animal-bites).

`public/images/bali.jpg` is an Unsplash Bali temple landscape, downloaded from `https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=85`. The [Unsplash license](https://unsplash.com/license) permits commercial use. No depicted person is represented as clinic staff. The wordmark, line icons, resource illustrations, and membership concept are project-native SVG/CSS designs; no clinical credentials or actual membership card are implied.

No deployment has been performed.
