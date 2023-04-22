import GlobalSettings from './environments';
const appEnv = process.env.NODE_ENV || 'development';
const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
// const API_BASE_URL =
//   process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api/v1';

// @ts-ignore
export default defineNuxtConfig({
  // mode: 'universal',
  // target: 'static',
  // server: {
  //   port: 3000, // default: 3000
  //   host: '0.0.0.0',
  //   timing: false,
  // },

  // bridge: {
  //   nitro: true,
  // },

  // nitro: {
  //   publicAssets: [],
  // },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  // ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  // target: 'public',
  ssr: false,
  routeRules: {
    // prerender: true - this will be generated at build time.
    // static: true - this is generated on demand, and then cached until the next build
    // swr: 'time' - this is generated on demand each 'time' period.
    // ssr: false - this is client-side rendered.
    // '/': { prerender: true },
    // These pages are for logged-in users, or aren't performance-critical enough to render on the server.
    // '/artworks/**': { ssr: false },
    '/admin/**': { ssr: false },
    '/user/**': { ssr: false },
    // '/gallery/**': { ssr: false },
    // Render on demand - may never be shown in a given build - then cache for a while.
    '/exhibitions/**': { swr: 3600 },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxt/image-edge',
    '@nuxt/content',
    // '@nuxtjs/axios',
    // '@nuxtjs/auth',
  ],

  app: {
    head: {
      link: [{ rel: 'preconnect', href: 'https://res.cloudinary.com' }],
      meta: [{ 'http-equiv': 'accept-ch', content: 'DPR' }],
    },
  },

  content: {
    // https://content.nuxtjs.org/api/configuration
  },

  buildModules: [
    [
      '@pinia/nuxt',
      {
        authImports: ['defineStore'],
      },
    ],
  ],

  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },

  image: {
    cloudinary: {
      baseURL: CLOUDINARY_URL,
      loader: 'cloudinary',
      domains: ['res.cloudinary.com'],
      modifiers: {
        quality: 'auto:best',
        dpr: 'auto',
      },
    },
    domains: ['avatars0.githubusercontent.com'],
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  // axios: {
  //   proxy: true,
  //   baseURL: API_BASE_URL,
  // },
  // proxy: {
  //   '/api/v1': API_BASE_URL,
  // },
  // env: {
  //   API_BASE_URL : process.env.API_BASE_URL || 'http://localhost:8000',
  // },
  // https://nuxtjs.org/docs/configuration-glossary/configuration-env/,
  // https://nuxt.com/docs/guide/going-further/runtime-config/
  runtimeConfig: {
    public: {
      // overridden by NUXT_PUBLIC_API_BASE
      apiBase: '',
      dev: process.env.NODE_ENV === 'development',
      // prefix: process.env.URL_PREFIX || '/api/v1',
      googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID || '',
      siteEnvironment: GlobalSettings[appEnv].siteEnvironment,
    },
  },
  // In case of using ssr
  // privateRuntimeConfig: {}

  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            propertyName: 'token',
          },
          logout: true,
        },
      },
    },
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },

  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/assets/css/main.scss',
  ],
  // srcDir: 'src/',

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
      // {
      //   path: '~/components/common/landing',
      //   extensions: ['vue'],
      // },
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

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: process.env.npm_package_name || '',
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
});
