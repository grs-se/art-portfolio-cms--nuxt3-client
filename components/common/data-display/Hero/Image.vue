<script lang="ts" setup>
defineProps({
  heroImages: {
    type: Object,
    required: true,
  },
});
</script>
<template>
  <div
    v-for="heroImage in heroImages"
    :key="heroImage._id"
    class="col-span-5 col-start-7 self-center justify-self-center"
  >
    <img class="object-contain" :src="'images/' + heroImage.imageUrl" />
    <span>{{ heroImage.description }}</span>
  </div>
</template>
