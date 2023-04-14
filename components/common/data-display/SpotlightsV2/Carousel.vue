<template>
  <!-- <SpotlightsSlides :slides="slides" /> -->
  <div class="spotlights-carousel">
    <div ref="inner" class="inner" :style="innerStyles">
      <div
        v-for="(slide, index) in slides"
        :key="`slide-${index}`"
        class="card-wrapper"
        :class="[transitionName]"
      >
        <SpotlightsCard
          :slide="slide"
          :current-slide="currentSlide"
          :index="index"
        />
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
const direction = ref();
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
  // console.log(currentSlide.value);
};
const prev = (step = -1) => {
  const index =
    currentSlide.value > 0
      ? currentSlide.value + step
      : props.slides.length - 1;
  setCurrentSlide(index);
  direction.value = 'left';
  // console.log(direction.value);
};
const _next = (step = 1) => {
  const index =
    currentSlide.value < props.slides.length - 1
      ? currentSlide.value + step
      : 0;
  setCurrentSlide(index);
  direction.value = 'right';
  // console.log(props.slides.length);
  // console.log(direction.value);
};
const next = (step = 1) => {
  _next(step);
};
const transitionName = computed(() => {
  return direction.value === 'right' ? 'slide-right' : 'slide-left';
});

// const step = ref();
// const inner = ref();
// const innerStyles = ref();

// const setStep = () => {
//   const innerWidth = inner.value.scrollWidth;
//   const totalCards = props.slides.length;
//   step.value = `${innerWidth / totalCards}px`;
//   console.log(innerWidth, totalCards);
// };

// const moveLeft = () => {
//   innerStyles.value = {
//     transform: `translateX(-${step.value}) translateX(-${step.value})`,
//   };
// };

// const moveRight = () => {
//   innerStyles.value = {
//     transform: `translateX(${step.value}) translateX(-${step.value})`,
//   };
// };

// const next = () => {
//   // setStep();
//   moveLeft();
// };

// const prev = () => {
//   // setStep();
//   moveRight();
// };

// onMounted(() => {
//   setStep();
// });
</script>

<style scoped>
.spotlights-carousel {
  display: flex;
  width: max-content;
  margin-top: 2.5rem;
  overflow-x: clip;
}

.inner {
  display: flex;
  transition: transform 1.2s;
  white-space: nowrap;
  /*  */
  position: relative;
  /*  */
}
.card-wrapper {
  /* display: flex; */
  padding-bottom: 1rem;
  margin: 0 0.5rem;
  overflow: hidden;
  /* transform: translateX(-50%); */

  /* position: absolute; */
  /* overflow: hidden; */
}

.slide-right,
.slide-left {
  transition: all 1s ease-in-out;
}
.slide-right {
  transform: translateX(-100%);
}

.slide-left {
  transform: translateX(100%);
}
</style>
