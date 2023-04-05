<template>
  <!-- <SpotlightsSlides :slides="slides" /> -->
  <div class="spotlights-carousel">
    <div ref="inner" class="inner" :style="innerStyles">
      <div
        v-for="(slide, index) in slides"
        :key="`slide-${index}`"
        class="card-wrapper"
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
  // setStep();
  moveLeft();
};

const prev = () => {
  // setStep();
  moveRight();
};

onMounted(() => {
  setStep();
});
</script>

<style scoped>
.spotlights-carousel {
  display: flex;
  /* width: max-content; */
  width: 100vw;
  margin-top: 2.5rem;
  /* overflow-x: clip; */
  overflow-x: hidden;
}

.inner {
  display: flex;
  transition: transform 1.2s;
  white-space: nowrap;
}
.card-wrapper {
  display: flex;
  padding-bottom: 1rem;
  margin: 0 0.5rem;
  overflow-x: clip;
  /* transform: translateX(-50%); */

  /* position: absolute; */
  /* overflow: hidden; */
}
</style>
