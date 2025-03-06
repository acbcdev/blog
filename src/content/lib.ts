import { splitLang } from "@/lib/content";
import { getCollection } from "astro:content";

export async function TopicsByLang(lang: string) {
  const posts = await getCollection("blog");
  const topics = [
    ...new Set(
      posts
        .filter((i) => splitLang(i.slug)[0] === lang)
        .map((post) => post.data.topic)
        .filter(Boolean),
    ),
  ];
  return topics;
}
