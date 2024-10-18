import { getByLang } from '@/i18n/utils'
import { languages } from '@/i18n/ui'

import { getCollection, type CollectionEntry } from 'astro:content'

async function allPages(): Promise<CollectionEntry<'blog'>[]> {
  return await getCollection('blog')
}


const englishPosts = (await allPages()).filter((post) => getByLang(post, 'en'))
const spanishPosts = (await allPages()).filter((post) => getByLang(post, 'es'))

export const getPostsByLang = (lang: keyof typeof languages) => {
  return lang === 'es' ? spanishPosts : englishPosts
}
