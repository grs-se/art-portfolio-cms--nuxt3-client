<template>
  <div
    class="aside-container"
    :class="[settingsStore.state.showAside === true ? 'w-1/3' : 'w-0']"
  >
    <div class="aside shadow-gray">
      <AsideControlBar @next="next" @prev="prev" @close-aside="closeAside" />
      <!-- Aside Slide -->
      <AsideSlide :current-slide="currentArtwork" />
      <AsideDetails :artwork="currentArtwork" />
      <Bookmark color="white" class="justify-end" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '~~/stores/settings';
const settingsStore = useSettingsStore();
import { type PropType } from 'vue';
// const route = useRoute();

import type { IArtwork } from '~/types';

const props = defineProps({
  currentArtwork: {
    type: Object as PropType<IArtwork>,
    required: true,
  },
  slides: {
    type: Array as PropType<IArtwork[]>,
    required: true,
  },
  open: {
    type: Boolean,
    default: true,
  },
});

const currentSlide = ref(1);
// const currentSlide = ref(props.artworks[currentArtwork]);

const setCurrentSlide = (index: number) => {
  currentSlide.value = index;
};

const closeAside = () => {};

const direction = ref('right');

const prev = (step = -1) => {
  const index =
    currentSlide.value > 0
      ? currentSlide.value + step
      : props.slides.length - 1;
  setCurrentSlide(index);
  direction.value = 'left';
};

const next = (step = 1) => {
  const index =
    currentSlide.value < props.slides.length - 1
      ? currentSlide.value + step
      : 0;
  setCurrentSlide(index);
  direction.value = 'right';
};

const switchSlide = (index: number) => {
  const step = index - currentSlide.value;
  if (step > 0) {
    next(step);
  } else {
    prev(step);
  }
};

// If Gallery Category switched show 1st element of array, don't close the aside

// const date = (d) => {
//   const date = new Date(d);

//   const options = { year: 'numeric' };

//   date.toLocaleString('en-US', options);

//   return date;
// };

const artworkLightboxLink = computed(
  () => `/artworks/${props.currentArtwork.slug}`
);
// const currentArtworkSlug = computed(() => route.params.slug);
// var tooltip = document.getElementById("tooltip-span");

// const displayModalMousePosition = () => {
// 	window.onmousemove = function (e) {
// 		var x = e.clientX,
// 			y = e.clientY;
// 		tooltip.style.top = y + 20 + "px";
// 		tooltip.style.left = x + 20 + "px";
// 	};
// };
</script>

<style scoped lang="scss">
.aside-container {
  // border-radius: 0.75rem;
  // height: 82vh;
  @apply border-r border-brand-gray-1;
  background-color: white;
  padding-bottom: 8rem;
}
.aside {
  height: max-content;
  z-index: 10;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }

  &__figure {
    // margin: 0.5rem;
    margin: 0 1.5rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    &:hover {
      box-shadow: grey;
    }
  }

  &__image {
    max-height: 62vh;
    width: auto;
    object-fit: contain;
  }
}
</style>
