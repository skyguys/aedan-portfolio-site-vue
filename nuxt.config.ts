// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/image'],

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'] // seed route for the crawler to start from
    }
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ]
})