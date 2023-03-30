<template>
  <!-- <SpotlightsSlides :slides="slides" /> -->
  <ul class="mt-10 flex w-max flex-row justify-center overflow-x-clip pb-16">
    <li
      v-for="(slide, index) in slides"
      :key="`slide-${index}`"
      class="slide mx-2"
    >
      <SpotlightsCard :slide="slide" />
      <!-- </template> -->
    </li>
  </ul>
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
};

const _next = (step = 1) => {
  const index =
    currentSlide.value < props.slides.length - 1
      ? currentSlide.value + step
      : 0;
  setCurrentSlide(index);
  direction.value = 'right';
};

const next = (step = 1) => {
  _next(step);
};
</script>
