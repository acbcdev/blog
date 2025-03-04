import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { splitLang } from "@/lib/content";

export async function GET(context) {
  const posts = await getCollection("blog");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => {
      const [lang, slug] = splitLang(post.slug);
      return {
        ...post.data,
        link: `${lang}/article/${slug}`,
      };
    }),
  });
}
