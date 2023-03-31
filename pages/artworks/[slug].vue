<template>
  <!-- <Lightbox :artwork="currentArtworkSlug" /> -->
  <h1>Hello</h1>
  <h1>{{ currentArtworkSlug }}</h1>
</template>

<script lang="ts" setup>
const route = useRoute();
const currentArtworkSlug = computed(() => {
  route.params.slug;
});

onMounted(() => {
  console.log(currentArtworkSlug.value);
});
</script>
