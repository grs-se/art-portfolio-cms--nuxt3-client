<template>
  <!-- <SpotlightsSlides :slides="slides" /> -->
  <div class="spotlights-carousel">
    <div
      ref="inner"
      class="spotlights-carousel-inner inner"
      :style="innerStyles"
    >
      <div
        v-for="(slide, index) in slides"
        :key="`slide-${index}`"
        class="spotlights-carousel-inner"
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

const step = ref();
const inner = ref();
const innerStyles = ref();

const setStep = () => {
  const innerWidth = inner.value.scrollWidth;
  const totalCards = props.slides.length;
  step.value = `${innerWidth / totalCards}px`;
  console.log(innerWidth, totalCards);
};

const moveLeft = () => {
  innerStyles.value = {
    transform: `translateX(-${step.value}) translateX(-${step.value})`,
  };
};

const moveRight = () => {
  innerStyles.value = {
    transform: `translateX(${step.value}) translateX(-${step.value})`,
  };
};

const next = () => {
  setStep();
  moveLeft();
};

const prev = () => {
  setStep();
  moveRight();
};

// onMounted(() => {
//   nextTick(() => setStep());
// });
</script>

<style scoped>
.spotlights-carousel {
  display: flex;
  width: max-content;
  margin-top: 2.5rem;
}

.inner {
  transition: transform 1.2s;
  white-space: nowrap;
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
