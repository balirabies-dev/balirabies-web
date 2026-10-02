# Languages

English is the default and keeps unprefixed URLs. Indonesian uses `/id`.
`proxy.ts` rewrites English requests to the statically generated `/en` routes;
visiting `/en/...` directly redirects to its unprefixed canonical URL.

Add a language by registering its code and native label in `config.ts`, adding
its catalog beside `id.json`, and registering that catalog in `translate.tsx`.
The selector, static routes, alternate links, and sitemap use the shared registry.
Update locale-specific metadata and number formatting for any new language.

Catalog keys are the normalized English source copy. `translateTree` translates
rendered text, accessible labels, and internal links before rendering, equally
on the server and client. Keep SVG `<title>` children as a single string.
For server components, pass the route locale; client components read it from
`LocaleProvider`. Missing entries fall back to English.
