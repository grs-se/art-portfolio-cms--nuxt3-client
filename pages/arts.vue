<script setup>
const { $fetchApi } = useNuxtApp();

const artworks = ref([]);

const fetchArtworks = async () => {
  try {
    const response = await $fetchApi.art.getArtworks();
    artworks.value = response;
    console.log(artworks.value);
  } catch (error) {
    console.log(error);
  }
};

onMounted(fetchArtworks);
</script>

<template>
  <div class="">
    <p v-for="artwork in artworks">{{ artwork.title }}</p>
  </div>
</template>
