<template>
  <!-- <SpotlightsSlides :slides="slides" /> -->
  <div class="spotlights-carousel">
    <div class="spotlights-carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="`slide-${index}`"
        class="spotlights-carousel-inner"
        :index="index"
        :direction="direction"
      >
        <SpotlightsCard :slide="slide" />
        <!-- </template> -->
      </div>
    </div>
  </div>
  <SpotlightsControls @next="next" @prev="prev" />
</template>

<script lang="ts" setup>
const props = defineProps({
  slides: {
    type: Object,
    required: true,
  },
});

const currentSlide = ref(0);
const direction = ref('right');

// const switchSlide = (index) => {
//   const step = index - currentSlide.value;
//   if (step > 0) {
//     next(0);
//   } else {
//     prev(step);
//   }
// };

const setCurrentSlide = (index) => {
  currentSlide.value = index;
};

const prev = (step = -1) => {
  const index =
    currentSlide.value > 0
      ? currentSlide.value + step
      : props.slides.length - 1;
  setCurrentSlide(index);
  direction.value = 'left';
  console.log(direction.value);
};

const _next = (step = 1) => {
  const index =
    currentSlide.value < props.slides.length - 1
      ? currentSlide.value + step
      : 0;
  setCurrentSlide(index);
  direction.value = 'right';
  console.log(direction.value);
};

const next = (step = 1) => {
  _next(step);
};

const transitionName = computed(() => {
  return direction.value === 'right' ? 'slide-out' : 'slide-in';
});
</script>

<style scoped>
.spotlights-carousel {
  display: flex;
  width: max-content;
  margin-top: 2.5rem;

  /* position: relative; */
}
.spotlights-carousel-inner {
  display: flex;
  width: max-content;
  justify-content: center;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 1rem;
  overflow-x: clip;
  margin: 0 0.5rem;
  /* transform: translateX(-50%); */

  /* position: absolute; */
  /* overflow: hidden; */
}
</style>
