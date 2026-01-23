import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    image: z.string(),
    github: z.string().url().optional(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects };
