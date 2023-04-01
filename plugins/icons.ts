import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
  faAngleDown,
  faAngleUp,
  faSearch,
  faUser,
  faExclamation,
  faXmark,
  faCheck,
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faCaretUp,
  faBookmark as fasBookmark,
  faHeart as fasHeart,
  // fa-solid fa-xmark-large
} from '@fortawesome/free-solid-svg-icons';

import {
  faHeart as farHeart,
  faBookmark as farBookmark,

  // fa-solid fa-xmark-large
} from '@fortawesome/free-regular-svg-icons';

library.add(
  faAngleDown,
  faAngleUp,
  faSearch,
  faUser,
  faExclamation,
  faXmark,
  faCheck,
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faCaretUp,
  fasBookmark,
  farBookmark,
  fasHeart,
  farHeart
);

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
