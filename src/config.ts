// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "masb0ymas";
export const SITE_DESCRIPTION = "I write a blog for my note";
export const TWITTER_HANDLE = "@masb0ymas";
export const MY_NAME = "N. Fajri";
export const MY_POSITION = "Software Engineer";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
