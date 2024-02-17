import { defineCollection, z } from 'astro:content'

const schema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  image: z.string().optional(),
  author: z.string().optional(),
  authorTwitter: z.string().optional(),
  category: z.string().optional(),
  quote: z.string().optional(),
  authorAvatar: z.string().optional(),
  tags: z.array(z.string())
})

const anime = defineCollection({
  type: 'content',
  // Type-check formatter using a schema
  schema
})

const finance = defineCollection({
  type: 'content',
  // Type-check formatter using a schema
  schema
})

const sports = defineCollection({
  type: 'content',
  // Type-check formatter using a schema
  schema
})

const music = defineCollection({
  type: 'content',
  // Type-check formatter using a schema
  schema
})

const movie = defineCollection({
  type: 'content',
  // Type-check formatter using a schema
  schema
})

const life = defineCollection({
  type: 'content',
  // Type-check formatter using a schema
  schema
})

const hiTech = defineCollection({
  type: 'content',
  // Type-check formatter using a schema
  schema
})

const games = defineCollection({
  type: 'content',
  // Type-check formatter using a schema
  schema
})

export const collections = { anime, finance, sports, life, music, movie, hiTech, games }
