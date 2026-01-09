export default defineNuxtConfig({
  ssr: true,

  typescript: {
    strict: true
  },

  nitro: {
    preset: 'vercel'
  },

  devtools: {
    enabled: true
  },

  // 👇 IMPORTANTE
  imports: {
    dirs: [
      'composables',
      'utils'
    ]
  }
})
