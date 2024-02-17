import { defineCollection, z } from "astro:content";

const schema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  image: z.string(),
  author: z.string(),
  authorTwitter: z.string(),
  category: z.string(),
  quote: z.string(),
  authorAvatar: z.string(),
  tags: z.array(z.string()),
});

const anime = defineCollection({
  type: "content",
  // Type-check formatter using a schema
  schema,
});

const finance = defineCollection({
  type: "content",
  // Type-check formatter using a schema
  schema,
});

const sport = defineCollection({
  type: "content",
  // Type-check formatter using a schema
  schema,
});

const music = defineCollection({
  type: "content",
  // Type-check formatter using a schema
  schema,
});

const movie = defineCollection({
  type: "content",
  // Type-check formatter using a schema
  schema,
});

const life = defineCollection({
  type: "content",
  // Type-check formatter using a schema
  schema,
});

const hiTech = defineCollection({
  type: "content",
  // Type-check formatter using a schema
  schema,
});

const games = defineCollection({
  type: "content",
  // Type-check formatter using a schema
  schema,
});

export const collections = {
  anime,
  finance,
  sport,
  life,
  music,
  movie,
  hiTech,
  games,
};
