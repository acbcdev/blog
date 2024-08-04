import { getByLang } from '@/i18n/utils'
import { getCollection, type CollectionEntry } from 'astro:content'

async function allPages(): Promise<CollectionEntry<'blog'>[]> {
  return await getCollection('blog')
}


export const englishPage = (await allPages()).filter((post) => getByLang(post, 'en'))
export const spanishPage = (await allPages()).filter((post) => getByLang(post, 'es'))
