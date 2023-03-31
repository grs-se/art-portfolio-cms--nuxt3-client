<template>
  <figcaption class="my-4 flex w-1/2 flex-col px-4 py-1 text-white">
    <h3 class="mb-1">
      Title: <span class="text-lg">"{{ artwork.title }}"</span>
    </h3>
    <div class="mt flex flex-col text-base">
      <span>Medium: {{ artwork.medium[1] }}</span>
      <!-- <span>{{ date(artwork.date) }}</span> -->
      <span>Date: {{ artwork.date }}</span>
      <span class="mt-4">Location: {{ artwork.location }}</span>

      <span class="mt-4"
        >Tags: <a class="text-brand-blue-2" href="">{{ artwork.tags }}</a></span
      >
    </div>
  </figcaption>
</template>

<script lang="ts" setup>
defineProps({
  artwork: {
    type: Object,
    required: true,
  },
});
</script>
