<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useArtworksStore } from '~/stores/artwork';

const route = useRoute();
const onGalleryPage = computed(() => route.name === 'gallery');

const artworksStore = useArtworksStore();
const FILTERED_ARTWORKS = computed(() => artworksStore.FILTERED_ARTWORKS);

const searchMenu = ref(false);
const openSearchMenu = () => {};
const toggleSearchMenu = () => {
  searchMenu.value = !searchMenu.value;
  if (searchMenu.value === true) {
    openSearchMenu();
  }
};
</script>

<template>
  <div v-if="onGalleryPage">
    <font-awesome-icon
      :icon="['fas', 'search']"
      class="mr-3"
      @click="$emit(toggleSearchMenu)"
    />
    <span
      ><span class="text-brand-green-1">{{ FILTERED_ARTWORKS.length }}</span>
      artworks matched</span
    >
  </div>
</template>
