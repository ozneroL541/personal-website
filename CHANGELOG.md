# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `"hid": true` flag: any entry in a work, education, certificate, skill,
  or project array can be hidden from the site without deleting it from
  the JSON data (checked per language file, filtered centrally in
  `src/i18n/cv.ts` so no component has to remember to check it)
- Multilingual support (English and Italian) using Astro's built-in i18n routing (`/en/` and `/it/`, `/` redirects to `/en/`)
- `src/i18n/` module: per-language CV data loader (`cv.ts`), typed UI-string dictionary (`ui.ts`) with `useTranslations()`/`t()` helper, and a single `config.ts` registry for adding new languages
- Language switcher component (`LanguageSwitch.astro`) next to the theme switcher
- Alpine.js dropdown for theme selector with animated icons (sun/moon/computer)
- Dynamic theme system with 5 colour themes (default, blue, red, green, cyber)
- Light and dark mode variants for each theme
- System theme detection with live updates
- CSS-first theme configuration using `@theme inline` directive

### Changed

- CV content moved from a single `cv.json` to `src/i18n/data/en.json` and `src/i18n/data/it.json`, one file per language
- All section titles and UI copy (buttons, labels, command palette, theme names, etc.) now come from `src/i18n/ui.ts` instead of being hardcoded in components
- `<html lang>` now reflects the current locale instead of always being `"en"`
- Upgraded from Tailwind CSS v3 to v4
- Replaced JavaScript-based `tailwind.config.mjs` with CSS-first configuration in `global.css`
- Replaced native `<select>` with custom Alpine.js dropdown for theme selection
- Moved Alpine.js initialisation to Layout for global availability

### Fixed

- `it.json` had a JSON syntax error (trailing commas) that made it unparsable
- `@cv` import alias pointed at a `cv.json` file that no longer existed, breaking the build
- Stray non-translated leftover strings ("Ver {name}" instead of "View {name}", a literal `"slug"` instead of the project name)
- `Experience` section rendered an invalid element for array-style `summary` fields instead of a list item
- Layout breaking issue caused by hotkeypad reset.css overriding Tailwind utilities
- Experience timeline opacity and gradient colours using correct skin tokens

### Removed

- `tailwind.config.mjs` (replaced by CSS-first configuration)
- `public/themes/themes.css` (consolidated into `global.css`)
- `hotkeypad/reset.css` import (caused conflicts with Tailwind v4 @layer)
