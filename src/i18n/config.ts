/**
 * Central registry of supported languages.
 *
 * To add a new language:
 *   1. Add its code and display name below.
 *   2. Add a matching CV data file at `src/i18n/data/<code>.json`
 *      (copy an existing one and translate its values).
 *   3. Add a matching translations block in `src/i18n/ui.ts`.
 *   4. Add the code to `locales` in `astro.config.mjs`.
 *   5. Create `src/pages/<code>/index.astro` (copy `src/pages/it/index.astro`).
 *
 * TypeScript will then flag any file that forgot to add data for the
 * new language (see `src/i18n/cv.ts` and `src/i18n/ui.ts`).
 */
export const languages = {
	en: "English",
	it: "Italiano",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "en";

export const locales = Object.keys(languages) as Lang[];

/** Narrow an arbitrary string (e.g. `Astro.currentLocale`) to a known `Lang`. */
export function isLang(value: string | undefined | null): value is Lang {
	return !!value && value in languages;
}

export function getLang(value: string | undefined | null): Lang {
	return isLang(value) ? value : defaultLang;
}
