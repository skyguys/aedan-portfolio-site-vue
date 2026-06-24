import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      source: 'projects/**',
      type: 'page',
      schema: z.object({
        title: z.string(),
        title_additional_info: z.string(),
        description: z.string(),
        tools: z.string(),
        description_long: z.string(),
        date_range: z.string(),
        github: z.string().optional(),
        image_path: z.string(),
        images: z.array(z.string()),
        bulletpoints: z.array(z.string())
      })
    }),
    index: defineCollection({
      source: 'index/**',
      type: 'page',
      schema: z.object({
        images: z.array(z.string()),
        image_path: z.string()
      })
    })
  }
})