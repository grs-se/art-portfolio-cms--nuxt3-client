<script lang="ts" setup>
import { useArtworksStore } from '~~/store/modules/artwork';

const artworksStore = useArtworksStore();
const FILTERED_ARTWORKS = computed(() => artworksStore.FILTERED_ARTWORKS);
</script>

<template>
  <span
    ><span class="text-brand-green-1">{{ FILTERED_ARTWORKS.length }}</span>
    artworks</span
  >
</template>
