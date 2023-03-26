// https://nuxt.com/docs/api/configuration/nuxt-config
const baseUrl = process.env.BASE_URL || 'http://localhost:8000'

export default defineNuxtConfig({
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0',
  },

  bridge: {
    nitro: true,
  },

  nitro: {
    publicAssets: [],
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'GRS - Art Gallery & CMS',
    titleTemplate: 'Art Gallery & CMS',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { name: 'name', content: 'GRS Art CMS' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', content: 'telephone=no' },
      {},
    ],
    link: [
      { rel: 'icon', href: '/favicon.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@600;700&display=swap',
      },
      {
        rel: 'preload',
        href: '//db.onlinewebfonts.com/c/0fac23294cabd9471f8ca7816bf12eae?family=FuturaPTW02-Book',
      },
    ],
    script: [
      {
        src: 'https://kit.fontawesome.com/54f29b7997.js',
        crossorigin: 'anonymous',
      },
    ],
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@pinia/nuxt'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.css',
  ],
  components: {
    dirs: [
      {
        path: '~/components/common/data-display',
        extensions: ['vue'],
      },
      {
        path: '~/components/common/data-input',
        extensions: ['vue'],
      },
      {
        path: '~/components/common/feedback',
        extensions: ['vue'],
      },
      {
        path: '~/components/common/landing',
        extensions: ['vue'],
      },
      {
        path: '~/components/common/layout',
        extensions: ['vue'],
      },
      {
        path: '~/components/common/navigation',
        extensions: ['vue'],
      },
      {
        path: '~/components/common/surfaces',
        extensions: ['vue'],
      },
      {
        path: '~/components/modules',
        extensions: ['vue'],
      },
      {
        path: '~/components',
        extensions: ['vue'],
      },
    ],
  },
  // env: {
  //   baseUrl : process.env.BASE_URL || 'http://localhost:8000',
  // },
  // https://nuxtjs.org/docs/configuration-glossary/configuration-env/,
  runtimeConfig: {
    public: {
      prefix: process.env.URL_PREFIX || '/api/v1',
      baseUrl: process.env.BASE_URL || 'http://localhost:8000',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
      dev: process.env.NODE_ENV === 'development',
    },
  },
  // In case of using ssr
  // privateRuntimeConfig: {}
})
