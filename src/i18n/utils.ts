import { defaultLang, getLang } from "./config";
import { ui, type UIKey } from "./ui";

export { getLang, isLang, languages, locales, defaultLang, type Lang } from "./config";
export { getCV } from "./cv";

/**
 * Build a `t(key, vars?)` translator bound to a language.
 *
 * Usage in a component:
 *   const lang = getLang(Astro.currentLocale);
 *   const t = useTranslations(lang);
 *   t("section.about")                          -> "About"
 *   t("hero.callPhone", { name, phone })         -> "Call Jane at 555-0100"
 */
export function useTranslations(lang: string | undefined | null) {
	const resolved = getLang(lang);

	return function t(key: UIKey, vars?: Record<string, string>): string {
		let str: string = ui[resolved][key] ?? ui[defaultLang][key] ?? key;

		if (vars) {
			for (const [name, value] of Object.entries(vars)) {
				str = str.replaceAll(`{${name}}`, value);
			}
		}

		return str;
	};
}
