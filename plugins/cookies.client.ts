import { VueCookieNext } from 'vue-cookie-next'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueCookieNext)
})
