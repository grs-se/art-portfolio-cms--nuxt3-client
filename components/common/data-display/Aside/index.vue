<template>
  <div
    v-if="currentItem"
    class="aside-container"
    :class="[settingsStore.state.showAside === true ? 'w-1/3' : 'w-0']"
  >
    <div class="aside shadow-gray">
      <AsideControlBar @next="next" @prev="prev" @close-aside="closeAside" />
      <!-- Aside Slide -->
      <AsideSlide :current-slide="currentItem" />
      <AsideDetails :artwork="currentItem" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '~~/store/modules/settings';
const settingsStore = useSettingsStore();
import { type PropType } from 'vue';
// const route = useRoute();

import type { IArtwork } from '~/types';

const props = defineProps({
  currentItem: {
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

const closeAside = () => {
  settingsStore.state.showAside === false;
};

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
</script>

<style scoped lang="scss">
.aside-container {
  // border-radius: 0.75rem;
  // height: 82vh;
  @apply border-r border-brand-gray-1;
  background-color: white;
  padding-bottom: 8rem;
  .aside {
    height: max-content;
    z-index: 10;
    display: flex;
    flex-direction: column;

    ::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
