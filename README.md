# Adopt a Church

A shortlist of old churches a private person could buy and keep standing, with the due diligence done.

## Where things are

| You want to change | Edit this |
| --- | --- |
| The manifesto | `src/pages/why.md` |
| The ownership history | `src/pages/who-owns-the-churches.md` |
| The first-timer guide | `src/pages/before-you-buy.md` |
| The donate page | `src/pages/donate.md` |
| The about page | `src/pages/about.md` |
| The home page | `src/pages/index.astro` |
| A church | one file per church in `src/content/churches/` |
| A church's photos | `public/photos/<church-file-name>/` |
| Colours and type | `src/styles/global.css` |
| Site name and menu | `src/layouts/Base.astro` |

## Adding a church

1. Copy `templates/church-template.md` into `src/content/churches/` under a new name, e.g. `chapelle-saint-roch-morbihan.md`. The file name becomes the web address.
2. Fill in the fields at the top. Delete the `specimen: true` line.
3. Mark every fact as `listing` (the agent says so), `checked` (confirmed against a public record, with a `source` link) or `unknown` (a question for the agent).
4. Put photos in `public/photos/<church-file-name>/` and list them under `photos:` with a credit. Only use photos you have permission for.
5. Write the verdict in the text under the second `---` line.

When a church sells, change `status` to `saved`. The profile stays on the site with a stamp.

## Running it on your own computer

```
npm install
npm run dev
```

## Publishing

The site is static. Import this repository into Vercel (or Netlify, or Cloudflare Pages); the defaults work. Every change saved to the `main` branch publishes itself.
