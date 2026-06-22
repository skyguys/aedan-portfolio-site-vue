import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      source: 'projects/**',
      type: 'page',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        images: z.array(z.string())
      })
    }),
    index: defineCollection({
      source: 'index/**',
      type: 'page',
      schema: z.object({
        images: z.array(z.string())
      })
    })
  }
})