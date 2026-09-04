/**
 * Shape of a single-language CV data file (e.g. `src/i18n/data/en.json`).
 *
 * Loosely based on the jsonresume.org schema, trimmed down (and made
 * partially optional) to match the fields this site actually renders.
 * When adding a new field to the JSON data, add it here too so every
 * language file is checked against the same shape.
 */
export interface CV {
  basics: Basics;
  work: Array<Hideable<Work>>;
  volunteer?: Array<Hideable<Volunteer>>;
  education: Array<Hideable<Education>>;
  awards?: Array<Hideable<Awards>>;
  certificates?: Array<Hideable<Certificates>>;
  publications?: Array<Hideable<Publications>>;
  skills: Array<Hideable<Skills>>;
  languages: Array<Hideable<Languages>>;
  interests?: Array<Hideable<Interests>>;
  references?: Array<Hideable<References>>;
  projects?: Array<Hideable<Projects>>;
}

/**
 * Any entry in one of the arrays above (a job, a degree, a skill, a
 * project...) can be marked `"hide": true` in the JSON data to hide it from
 * the website without deleting it. See `getCV()` in `./cv.ts`, which strips
 * these out before the data reaches any component.
 */
export type Hideable<T> = T & { hide?: boolean };

export type Theme = "default" | "blue" | "red" | "green" | "cyber" | string;

interface Basics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  theme?: Theme;
  location: Location;
  profiles: Array<Profiles>;
}

interface Location {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

interface Profiles {
  network: string;
  username: string;
  url: string;
}

interface Work {
  name: string;
  position: string;
  location?: string;
  location_type?: string;
  url: string;
  startDate: DateStr;
  endDate?: DateStr | null;
  summary?: string | Array<string>;
  highlights?: Highlight;
  responsibilities?: Array<string>;
  achievements?: Array<string>;
  skills?: Array<string>;
}

type DateStr = `${string}-${string}-${string}`;

interface Volunteer {
  organization: string;
  position: string;
  url: string;
  startDate: DateStr;
  endDate: DateStr;
  summary: string;
  highlights: Highlight;
}

interface Skills {
  name: string;
  level?: string;
  keywords?: Array<string>;
}

interface Awards {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

interface Certificates {
  name: string;
  date: DateStr;
  issuer: string;
  url: string;
}

interface Publications {
  name: string;
  publisher: string;
  releaseDate: DateStr;
  url: string;
  summary: string;
}

interface Education {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: DateStr;
  endDate?: DateStr;
  score?: string;
  courses?: Array<string>;
}

interface Languages {
  language: Language;
  fluency: string;
}

type Language =
  | "Spanish"
  | "English"
  | "German"
  | "France"
  | "Italian"
  | "Korean"
  | "Portuguese"
  | "Chinese"
  | "Arabic"
  | "Dutch"
  | "Finnish"
  | "Russian"
  | "Turkish"
  | "Hindi"
  | "Bengali"
  | string;

interface Projects {
  name: string;
  isActive: boolean;
  description: string;
  highlights: Highlight;
  url: string;
  github?: string;
}

interface Interests {
  name: string;
  keywords: Array<string>;
}

interface References {
  name: string;
  reference: string;
}

type Highlight = Array<string>;
