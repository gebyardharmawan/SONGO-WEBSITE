# SONGO Kitchen & Co.

Responsive restaurant website for **SONGO Kitchen & Co. — Good Food, Good Company.** The site uses native HTML, CSS, and JavaScript ES modules with a small Node.js preview server. No package installation or build step is required.

## Preview locally

1. Install Node.js 20 or newer.
2. Open a terminal in this folder.
3. Run `npm run dev`.
4. Open [http://127.0.0.1:4173](http://127.0.0.1:4173).

`npm start` runs the same server. To change the local port, set `PORT` before starting it, for example `$env:PORT=5000; npm run dev` in PowerShell.

## Pages

- `index.html` — Homepage
- `menu.html` — Searchable and filterable menu catalogue plus source menu posters
- `story.html` — Our Story and brand identity
- `promotions.html` — Promotional artwork and source-backed combo prices
- `packaging.html` — Clearly labeled packaging mockup concept
- `locations.html` — Malang operating area and address/hours placeholders
- `contact.html` — Official WhatsApp, Instagram, and ESB ordering links

## Menu source and business data

Menu names and listed prices in `src/data.js` were transcribed from the supplied menu images. The original menu boards remain in `assets/menu/`; promotional posters are in `assets/promotions/`. Search, category filters, item WhatsApp links, and promotion cards use this data.

The official channels are configured in `src/data.js`:

- WhatsApp: `+62 813-3300-4510`
- Instagram: `@warungsongo.malang`
- Online ordering: ESB delivery page
- Operational area: Malang only

The supplied promotional flyers do not specify their validity period. The promotions page asks visitors to confirm availability before ordering. Full outlet address and operating hours remain clearly marked as unconfirmed.

The primary logo, dragon chef mascot, menu posters, promotional posters, and food box mockup are stored locally in `assets/`. The food box is labeled as a visual mockup, not production packaging. The homepage food mood photo is illustrative and is not presented as an item on the confirmed menu.

## Deployment

The pages are static and can be hosted on a static web host without a build step. No deployment has been performed. Before publishing, confirm current menu prices, promotional validity, outlet address, and business hours.
