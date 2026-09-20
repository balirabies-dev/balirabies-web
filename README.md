# BaliRabies — Coming soon

The `main` branch contains a single responsive coming-soon page, using the Bali photograph and Coastal Teal identity. The full website remains on `development`.

## Preview and build

```sh
npm install
npm run dev
npm run lint
npm run build -- --webpack
npm run start
```

Webpack can be used when Turbopack subprocess permissions are restricted locally. The page uses system fonts, a locally hosted photograph, and Next Image; there are no forms, analytics, contact integrations, or external font requests.

## Domain setup

Set `NEXT_PUBLIC_SITE_URL=https://your-actual-domain` in the deployment environment before building to enable the correct canonical URL and social URL. Connect the domain through your hosting provider. No domain or deployment has been configured by this change.

Photo: the same Unsplash Bali landscape used in `development`, image ID `photo-1537996194471-e657df975ab4`. Usage: https://unsplash.com/license.

## Reuse the holding page

The homepage and `/coming-soon` both render `app/components/coming-soon.tsx`. Keep that component and route when replacing the homepage with the full website. Render `<ComingSoon />` anywhere a holding page is needed, or customize its `title`, `imageSrc`, `imageAlt`, and `footer` props. The dedicated route is excluded from search indexing to avoid duplicate content.

The heading gently fades into place and receives a single warm light sweep. The effect finishes within 4.2 seconds, uses CSS only, and is disabled for reduced-motion preferences. The header and footer stay unchanged.
