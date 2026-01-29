import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Blog collection schema
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Events collection schema
const eventsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/events" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    image: z.string().optional(),
    description: z.string(),
    featured: z.boolean().default(false),
    recurring: z.enum(['', 'weekly', 'monthly', 'yearly']).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  events: eventsCollection,
};
