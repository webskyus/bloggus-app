import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '@/utils/consts.js'

export const GET = async (context: { site: string }): Promise<Response> => {
  const animePosts = await getCollection('anime')
  const hiTechPosts = await getCollection('hi-tech')
  const sportPosts = await getCollection('sport')
  const moviePosts = await getCollection('movie')
  const financePosts = await getCollection('finance')
  const gamesPosts = await getCollection('games')
  const lifePosts = await getCollection('life')
  const musicPosts = await getCollection('music')

  return await rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [
      ...animePosts,
      ...hiTechPosts,
      ...sportPosts,
      ...moviePosts,
      ...financePosts,
      ...gamesPosts,
      ...lifePosts,
      ...musicPosts
    ].map((post: any) => ({
      ...post.data,
      link: `/${post.data.category}/${post.slug}/`
    }))
  })
}
