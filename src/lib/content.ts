// import { getCollection, type CollectionEntry } from "astro:content";

// async function allPages(): Promise<CollectionEntry<"blog">[]> {
//   return await getCollection("blog");
// }

/**
 * Splits a URL into its language identifier and the remaining part.
 *
 * @param {string} url - The URL string to split.
 * @returns {[string, string]} An array where the first element is the language and the second is the rest of the URL.
 */
export function splitLang(url: string): [string, string] {
  const [lang, rest] = url.split("/");
  return [lang, rest];
}
