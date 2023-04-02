<script lang="ts" setup>
defineProps({
  spotlights: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <section>
    <ul class="mt-10 justify-center pb-16">
      <li
        v-for="spotlight in spotlights"
        :key="spotlight.id"
        class="slide mx-2"
      >
        <SpotlightsCard :slide="spotlight" />
        <!-- </template> -->
      </li>
    </ul>
    <!-- <spot-light-slides /> -->
    <!-- <SpotlightsControls /> -->
    <!-- <div class="h-32">
      <div class="flex justify-between px-40">
        <action-button
          text="<"
          btn="slide-show"
          class="right-4"
          @click="prevSlide"
        />
        <action-button
          text=">"
          btn="slide-show"
          class="left-4"
          @click="nextSlide"
        />
      </div>
    </div> -->
  </section>
</template>
