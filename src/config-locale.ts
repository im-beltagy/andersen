import { Pathnames } from "next-intl/routing";

export type Locales = "en" | "de";

export const locales: Locales[] = ["en", "de"];
export const defaultLocale: Locales = "en";

export const pathnames: Pathnames<typeof locales> = {
  "/": "/",
  "/profile": {
    en: "/profile",
    de: "/profile",
  },
  "/about-us": {
    en: "/about-us",
    de: "/about-us",
  },
};
