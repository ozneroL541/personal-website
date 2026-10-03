import { defaultLang, getLang, type Lang } from "./config";
import type { CommonCV, CV, Hideable, LocalizedCV } from "./cv.types";

import common from "./data/common.json";
import en from "./data/en.json";
import it from "./data/it.json";

// Adding a language to `languages` in `./config.ts` without adding its data
// here will cause a type error, so it can't be forgotten.
const localizedByLang: Record<Lang, LocalizedCV> = {
	en: en as LocalizedCV,
	it: it as LocalizedCV,
};

const shared: CommonCV = common as CommonCV;

function mergeCommonData(locale: LocalizedCV): CV {
	return {
		...locale,
		...shared,
		basics: {
			...shared.basics,
			...locale.basics,
		},
	};
}

const rawByLang: Record<Lang, CV> = {
	en: mergeCommonData(localizedByLang.en),
	it: mergeCommonData(localizedByLang.it),
};

function omitHidden<T>(items: Array<Hideable<T>>): Array<T>;
function omitHidden<T>(items: Array<Hideable<T>> | undefined): Array<T> | undefined;
function omitHidden<T>(items: Array<Hideable<T>> | undefined): Array<T> | undefined {
	return items?.filter((item) => !item.hide);
}

/**
 * Strip out any entry marked `"hide": true` in the JSON data (a job, a
 * degree, a skill, a project...) so it never reaches a component. This runs
 * once per language, at module load, rather than on every `getCV()` call.
 *
 * Adding a new array to `CV` in `cv.types.ts`? Filter it here too, or a
 * `"hide": true` entry in that array will still render.
 */
function withoutHidden(cv: CV): CV {
	return {
		...cv,
		work: omitHidden(cv.work),
		volunteer: omitHidden(cv.volunteer),
		education: omitHidden(cv.education),
		awards: omitHidden(cv.awards),
		certificates: omitHidden(cv.certificates),
		publications: omitHidden(cv.publications),
		skills: omitHidden(cv.skills),
		languages: omitHidden(cv.languages),
		interests: omitHidden(cv.interests),
		references: omitHidden(cv.references),
		projects: omitHidden(cv.projects),
	};
}

const cvByLang: Record<Lang, CV> = {
	en: withoutHidden(rawByLang.en),
	it: withoutHidden(rawByLang.it),
};

/**
 * Get the CV data for a language, with any `"hide": true` entries already
 * removed, falling back to the default language.
 */
export function getCV(lang: string | undefined | null): CV {
	return cvByLang[getLang(lang)] ?? cvByLang[defaultLang];
}
