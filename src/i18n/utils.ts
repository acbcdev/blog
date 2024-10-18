import { ui, defaultLang, type languages } from "@/i18n/ui";
import type { CollectionEntry } from "astro:content";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}



export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  };
}


/**
 *
 * @example
 * const isEnglish = getByLang(post, lang);
 * @param post CollectionEntry<"blog">
 * @param lang keyof typeof languages
 * @returns boolean
 *
 */
export const getByLang = (
  post: CollectionEntry<"blog">,
  lang: keyof typeof languages,
) => {
  const [lg] = post.slug.split("/");

  return lang === lg;
};

export const modifySlug = (slug: CollectionEntry<"blog">["slug"]) => {
  const [, rest] = slug.split("/");
  return rest
}
