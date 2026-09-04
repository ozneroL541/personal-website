import type { Lang } from "./config";

/**
 * Static UI strings (section titles, buttons, labels...) shown around the
 * CV data. This is separate from the CV content itself (see `src/i18n/data`).
 *
 * `Record<Lang, UIDict>` means TypeScript will refuse to compile if:
 *   - a language registered in `src/i18n/config.ts` is missing from `ui` below, or
 *   - a language here is missing one of the keys declared in `UIDict`.
 * So adding a language or a new string can't silently end up half-translated.
 *
 * Values may contain `{placeholders}`, filled in via `t(key, { placeholder: value })`
 * (see `src/i18n/utils.ts`).
 */
type UIDict = {
	"meta.title": string;

	"section.about": string;
	"section.education": string;
	"section.experience": string;
	"section.projects": string;
	"section.skills": string;
	"section.certificates": string;

	"common.present": string;
	"common.view": string;
	"common.showMore": string;
	"common.showLess": string;

	"experience.summary": string;
	"experience.responsibilities": string;
	"experience.achievements": string;
	"experience.technologies": string;

	"hero.visitProfile": string;
	"hero.callPhone": string;
	"hero.copied": string;

	"projects.viewRepo": string;

	"footer.pressPrefix": string;
	"footer.pressSuffix": string;
	"footer.printResume": string;
	"footer.searchPlaceholder": string;
	"footer.visitNetwork": string;
	"footer.social": string;
	"footer.actions": string;

	"theme.system": string;
	"theme.light": string;
	"theme.dark": string;

	"language.label": string;
};

export type UIKey = keyof UIDict;

export const ui: Record<Lang, UIDict> = {
	en: {
		"meta.title": "{name} Portfolio - {label}",

		"section.about": "About",
		"section.education": "Education",
		"section.experience": "Experience",
		"section.projects": "Projects",
		"section.skills": "Skills",
		"section.certificates": "Certificates",

		"common.present": "Present",
		"common.view": "View {name}",
		"common.showMore": "Show more",
		"common.showLess": "Show less",

		"experience.summary": "Summary",
		"experience.responsibilities": "Responsibilities",
		"experience.achievements": "Achievements",
		"experience.technologies": "Technologies used",

		"hero.visitProfile": "Visit {name} profile on {network}",
		"hero.callPhone": "Call {name} at {phone}",
		"hero.copied": "Copied!",

		"projects.viewRepo": "View {name} repository on GitHub",

		"footer.pressPrefix": "Press",
		"footer.pressSuffix": "to open the command palette.",
		"footer.printResume": "Print Resume",
		"footer.searchPlaceholder": "Search Command",
		"footer.visitNetwork": "Visit {network}",
		"footer.social": "Social",
		"footer.actions": "Actions",

		"theme.system": "System",
		"theme.light": "Light",
		"theme.dark": "Dark",

		"language.label": "Change language",
	},
	it: {
		"meta.title": "Portfolio di {name} - {label}",

		"section.about": "Chi sono",
		"section.education": "Istruzione",
		"section.experience": "Esperienza",
		"section.projects": "Progetti",
		"section.skills": "Competenze",
		"section.certificates": "Certificazioni",

		"common.present": "Presente",
		"common.view": "Vedi {name}",
		"common.showMore": "Mostra di più",
		"common.showLess": "Mostra meno",

		"experience.summary": "Riepilogo",
		"experience.responsibilities": "Responsabilità",
		"experience.achievements": "Risultati",
		"experience.technologies": "Tecnologie utilizzate",

		"hero.visitProfile": "Visita il profilo {network} di {name}",
		"hero.callPhone": "Chiama {name} al numero {phone}",
		"hero.copied": "Copiato!",

		"projects.viewRepo": "Vedi la repository di {name} su GitHub",

		"footer.pressPrefix": "Premi",
		"footer.pressSuffix": "per aprire la palette dei comandi.",
		"footer.printResume": "Stampa CV",
		"footer.searchPlaceholder": "Cerca comando",
		"footer.visitNetwork": "Visita {network}",
		"footer.social": "Social",
		"footer.actions": "Azioni",

		"theme.system": "Sistema",
		"theme.light": "Chiaro",
		"theme.dark": "Scuro",

		"language.label": "Cambia lingua",
	},
};
