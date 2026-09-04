## Print-friendly portfolio CV

![preview](https://github.com/user-attachments/assets/44c47034-06e4-412a-b9dd-014593b32215)

![Astro Badge](https://img.shields.io/badge/Astro-BC52EE?logo=astro&logoColor=fff&style=flat)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-0F172A?&logo=tailwindcss)
![GitHub stars](https://img.shields.io/github/stars/Smilesharks/dev-portfolio)
![GitHub issues](https://img.shields.io/github/issues/Smilesharks/dev-portfolio)
![GitHub forks](https://img.shields.io/github/forks/Smilesharks/dev-portfolio)
![GitHub PRs](https://img.shields.io/github/issues-pr/Smilesharks/dev-portfolio)

## ✨ Features

- **Print-friendly** - Optimised layout for PDF export and printing
- **Multilingual** - English and Italian out of the box, easy to extend with more languages
- **Dark/Light mode** - System preference detection with manual override
- **5 Colour themes** - Default, blue, red, green, and cyber themes
- **Keyboard shortcuts** - Command palette with `Cmd/Ctrl + K`
- **Responsive design** - Mobile-first approach with Tailwind CSS 4
- **JSON-based content** - Easy content management via one JSON file per language

## 🛠️ Stack

- [**Astro**](https://astro.build/) - The next-gen web framework (using its built-in [i18n routing](https://docs.astro.build/en/guides/internationalization/)).
- [**Tailwind CSS 4**](https://tailwindcss.com/) - A utility-first CSS framework with CSS-first configuration.
- [**Alpine.js**](https://alpinejs.dev/) - Lightweight JavaScript framework for composing behaviour.
- [**Typescript**](https://www.typescriptlang.org/) - JavaScript with type syntax.
- [**HotKeyPad**](https://github.com/nicosommi/hotkeypad) - Command palette with keyboard shortcuts.

## 🚀 Getting Started

### 1. Use this Repo as an Astro Project Template

- I use [npm](https://npm.io/installation) as my package manager.

```bash
# Enable npm on MacOS, WSL & Linux:
corepack enable
corepack prepare npm@latest --activate
```

# Initialize the project
```bash
npm create astro@latest -- --template Smilesharks/dev-portfolio
```

### 2. Add Your Content:

CV content lives under `src/i18n/data/`, one JSON file per language (e.g. `en.json`, `it.json`).
Edit those files to create your own printable Portfolio/CV in each language you support.

### 3. Launch the Development Server:

```bash
# Enjoy the results
npm dev
```
1. Open [**http://localhost:4321**](http://localhost:4321/) in your browser to view the result 🚀

### 4. Customisable colours:

Change the `theme` property in `src/i18n/data/en.json` (and your other language files) and choose one of the available colour themes:

| Theme | Description |
|-------|-------------|
| `default` | Orange accent (default) |
| `blue` | Blue/slate accent |
| `red` | Red/stone accent |
| `green` | Lime/green accent |
| `cyber` | Yellow/cyan cyberpunk style |

Each theme includes light and dark mode variants. The theme selector dropdown allows users to switch between light, dark, and system preference.

**Creating custom themes:**

Edit `src/styles/global.css` and add your theme variables under the appropriate selectors (`:root [data-theme="your-theme"]` for light mode, `.dark [data-theme="your-theme"]` for dark mode).

### 5. Hiding an entry without deleting it:

Add `"hid": true` to any entry in a work, education, certificate, skill, or
project array (in any `src/i18n/data/*.json` file) to remove it from the
website without deleting it from the JSON:

```jsonc
{
  "work": [
    {
      "name": "Old Company",
      "position": "Intern",
      // ...
      "hid": true // this job is hidden, but stays in the file
    }
  ]
}
```

`hid` is checked per language file, so an entry can be hidden in one
language and shown in another if that's ever useful — but for a normal
"hide this everywhere" case, set it the same way in every language file.

### 6. Adding a language:

The site is available in English (`/en/`) and Italian (`/it/`); the bare `/` redirects to `/en/`. To add another language (e.g. Spanish, `es`):

1. Add its code and display name to `languages` in `src/i18n/config.ts`.
2. Copy `src/i18n/data/en.json` to `src/i18n/data/es.json` and translate its values.
3. Copy every key in the `en` block of `src/i18n/ui.ts` into a new `es` block and translate the UI strings (section titles, buttons, labels...).
4. Add `"es"` to `locales` in `astro.config.mjs`.
5. Create `src/pages/es/index.astro` with the same one-line content as `src/pages/it/index.astro`.

TypeScript will flag any of these steps you forget: `src/i18n/cv.ts` and `src/i18n/ui.ts` both require an entry for every language registered in `src/i18n/config.ts`, so a half-added language fails `astro check` instead of shipping silently broken.

The language switcher (next to the theme switcher) picks up new entries in `languages` automatically.

## 🧞 Commands

|     | Command         | Action                                                                       |
| :-- | :-------------- | :--------------------------------------------------------------------------- |
| ⚙️  | `dev` o `start` | Launches a local development server at `localhost:4321`.                   |
| ⚙️  | `build`         | Checks for errors and creates a production build in `./dist/`. |
| ⚙️  | `preview`       | Local preview at `localhost:4321`                                       |

Wiki: [dev-portfolio](https://deepwiki.com/Smilesharks/dev-portfolio)

CV JSON schema from [**jsonresume.org**](https://jsonresume.org/schema/)

Based on [**Bartosz Jarocki - Print-friendly, minimalist CV page**](https://github.com/BartoszJarocki/cv) and [**Miguel Ángel Durán - minimalist-portfolio-json**](https://github.com/midudev/minimalist-portfolio-json)
