import rss, { pagesGlobToRssItems } from '@astrojs/rss'
import { SITE_TITLE, SITE_DESCRIPTION } from '@/utils/consts.js'

export const GET = async (context: { site: any }): Promise<Response> => {
  return await rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    // @ts-expect-error
    items: await pagesGlobToRssItems(
      import.meta.glob('./**/*.{md,mdx}')
    )
  })
}
