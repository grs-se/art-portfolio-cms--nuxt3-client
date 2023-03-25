import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faAngleDown,
  faAngleUp,
  faSearch,
  faUser,
  faExclamation,
  faXmark,
  faCheck,
  // fa-solid fa-xmark-large
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faAngleDown,
  faAngleUp,
  faSearch,
  faUser,
  faExclamation,
  faXmark,
  faCheck
)

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon, {})
})
