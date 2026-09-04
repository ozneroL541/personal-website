import { defaultLang, getLang, type Lang } from "./config";
import type { CV } from "./cv.types";

import en from "./data/en.json";
import it from "./data/it.json";

// Adding a language to `languages` in `./config.ts` without adding its data
// here will cause a type error, so it can't be forgotten.
const cvByLang: Record<Lang, CV> = {
	en: en as CV,
	it: it as CV,
};

/** Get the CV data for a language, falling back to the default language. */
export function getCV(lang: string | undefined | null): CV {
	return cvByLang[getLang(lang)] ?? cvByLang[defaultLang];
}
