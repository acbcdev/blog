// import { getCollection, type CollectionEntry } from "astro:content";

// async function allPages(): Promise<CollectionEntry<"blog">[]> {
//   return await getCollection("blog");
// }

export function splitLang(url: string) {
  const [lang, rest] = url.split("/");
  return [lang, rest];
}
