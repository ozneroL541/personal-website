# Lorenzo Radice — personal website

This repository contains the source code for [radicelorenzo.eu](https://radicelorenzo.eu),
a bilingual personal portfolio and printable CV.

The site is built as a static Astro website. Most of the visible content is kept in
typed JSON files, while Astro components provide the layout, responsive behavior,
theme switching, language switching, and print stylesheet.

## Features

- English and Italian pages
- Locale-prefixed routes: `/en/` and `/it/`
- Automatic redirect from `/` to `/en/`
- Responsive portfolio layout
- Print-friendly CV layout for browser PDF export
- Light, dark, and system color modes
- Blue, red, green, cyber, and default accent themes
- Keyboard command palette (`Ctrl+K` on Windows/Linux, `Cmd+K` on macOS)
- JSON-based CV content with shared data that is not duplicated per language
- TypeScript checks for CV data and localization completeness

## Technology

- [Astro](https://astro.build/) — static site generation and routing
- [Tailwind CSS](https://tailwindcss.com/) — utility-first styling
- [Alpine.js](https://alpinejs.dev/) — small client-side interactions
- [TypeScript](https://www.typescriptlang.org/) — type checking
- [HotKeyPad](https://github.com/nicosommi/hotkeypad) — command palette

## Requirements

- Node.js 18 or newer
- npm or pnpm

The repository includes a `pnpm-lock.yaml`, so pnpm is the preferred package
manager. The scripts also work with npm.

## Local development

Clone the repository and install dependencies:

```bash
git clone https://github.com/ozneroL541/personal-website.git
cd personal-website
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) in a browser. The server
reloads when Astro components, styles, or content files change.

Useful commands:

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the local development server |
| `pnpm start` | Alias for `pnpm dev` |
| `pnpm build` | Run `astro check` and create a production build in `dist/` |
| `pnpm preview` | Serve the generated `dist/` directory locally |
| `pnpm astro ...` | Run an Astro CLI command |

With npm, replace `pnpm` with `npm run` where appropriate:

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Repository structure

```text
.
├── public/                 # Static assets served from the site root
│   ├── favicon.svg
│   └── photo.png
├── src/
│   ├── components/         # Page shell, controls, and CV sections
│   │   └── sections/       # Hero, about, experience, education, skills, etc.
│   ├── i18n/               # Locale registry, translations, types, and CV data
│   │   └── data/
│   ├── icons/              # Inline SVG Astro components
│   ├── layouts/            # HTML document and decorative layouts
│   ├── pages/              # Locale entry points
│   └── styles/             # Global CSS and theme variables
├── astro.config.mjs        # Astro, i18n, and Tailwind/Vite configuration
├── package.json            # Scripts and dependencies
├── pnpm-lock.yaml          # Locked dependency versions
└── tsconfig.json           # TypeScript configuration and `@/*` alias
```

## How a page is assembled

The locale pages are intentionally thin:

1. [`src/pages/en/index.astro`](./src/pages/en/index.astro) and
   [`src/pages/it/index.astro`](./src/pages/it/index.astro) render
   [`Home.astro`](./src/components/Home.astro).
2. `Home.astro` resolves the current locale and loads the CV through
   [`getCV()`](./src/i18n/cv.ts).
3. `Home.astro` composes the page from reusable section components.
4. [`Layout.astro`](./src/layouts/Layout.astro) adds document metadata, global
   styles, Alpine.js behavior, and theme initialization.
5. Astro generates static HTML for each locale.

The root [`src/pages/index.astro`](./src/pages/index.astro) exists so Astro can
generate the redirect from `/` to `/en/`. It is not a separate homepage.

## Editing CV content

CV content lives in [`src/i18n/data/`](./src/i18n/data/).

### Shared data

Put values that are identical in every language in
[`common.json`](./src/i18n/data/common.json), including:

- name, image, email, phone, and personal URL
- social profiles
- selected theme
- certificates
- skills and their keywords
- interests

This prevents the same information from being edited twice.

### Translated data

The locale files contain language-dependent content:

- [`en.json`](./src/i18n/data/en.json)
- [`it.json`](./src/i18n/data/it.json)

These files contain translated basics such as the headline and summary, plus
work experience, education, and language fluency labels.

The JSON shape is checked by the interfaces in
[`src/i18n/cv.types.ts`](./src/i18n/cv.types.ts). If a new field is added to the
data, update the corresponding type as well.

### Hiding entries

Most CV arrays support `"hide": true`. Hidden entries remain in the JSON but are
removed before the data reaches the components:

```json
{
  "name": "An older role",
  "position": "Intern",
  "hide": true
}
```

This can be used for work experience, education, certificates, skills,
projects, and other hideable entries. Visibility is controlled per locale.

## Localization

The supported languages are registered in
[`src/i18n/config.ts`](./src/i18n/config.ts), while interface strings such as
section titles and buttons are in [`src/i18n/ui.ts`](./src/i18n/ui.ts).
Astro's locale routing is configured in [`astro.config.mjs`](./astro.config.mjs).

To add a language:

1. Add its language code and display name to `languages` in `src/i18n/config.ts`.
2. Add the code to `i18n.locales` in `astro.config.mjs`.
3. Create `src/i18n/data/<code>.json` with the localized CV fields.
4. Add the language's UI translations to `src/i18n/ui.ts`.
5. Create `src/pages/<code>/index.astro` that renders `<Home />`.
6. Run `pnpm build` to catch missing locale data or translation keys.

The `Record<Lang, ...>` declarations in the i18n code intentionally make
missing language entries a TypeScript error.

## Themes and appearance

The selected accent theme is stored in `common.json`:

```json
{
  "basics": {
    "theme": "blue"
  }
}
```

Available themes are:

| Theme | Style |
| --- | --- |
| `default` | Orange accent |
| `blue` | Blue and slate accent |
| `red` | Red and stone accent |
| `green` | Lime and green accent |
| `cyber` | Yellow and cyan cyberpunk accent |

Theme variables and dark-mode variants are defined in
[`src/styles/global.css`](./src/styles/global.css). The user-facing theme
control switches between system, light, and dark modes and stores the
preference in `localStorage`.

## Printing the CV

Run the development server or preview a production build, then use the
browser's print dialog:

1. Open `/en/` or `/it/`.
2. Press `Ctrl+P`/`Cmd+P`.
3. Choose “Save to PDF” or a physical printer.

Print-specific layout rules are defined in the page components and global
styles. Controls and decorative elements marked as non-printable are hidden
automatically.

## Building and deploying

`pnpm build` generates a static `dist/` directory. The output can be hosted by
any static web server or static hosting provider, such as GitHub Pages,
Netlify, Vercel, or an object-storage website endpoint.

For a local production preview:

```bash
pnpm build
pnpm preview
```

No runtime server or database is required. The public assets and generated
HTML/CSS/JavaScript are sufficient to serve the site.

## Credits

The project uses ideas and patterns from:

- [Smilesharks](Smilesharks/dev-portfolio)
- [Bartosz Jarocki's print-friendly CV](https://github.com/BartoszJarocki/cv)
- [Miguel Ángel Durán's minimalist portfolio JSON](https://github.com/midudev/minimalist-portfolio-json)
- The [JSON Resume schema](https://jsonresume.org/schema/) as inspiration for
  the CV data shape
