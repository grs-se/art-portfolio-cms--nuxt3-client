<script lang="ts" setup>
import { useArtworksStore } from '~/stores/artwork';

const artworksStore = useArtworksStore();
onMounted(artworksStore.FETCH_ARTWORKS);

const ARTWORK_SPOTLIGHTS = computed(() => artworksStore.ARTWORK_SPOTLIGHTS);
const ARTWORK_HERO = computed(() => artworksStore.ARTWORK_HERO);

const searchPrompts = reactive(['painting', 'drawing', 'studio', 'landscape']);
</script>

<template>
  <main>
    <!-- Hero -->
    <NuxtLayout name="two-column">
      <template #slot-col-1>
        <HeroHeadline
          headline="George Rice-Smith"
          sub-heading="Paintings & Drawings"
          action=""
        />
        <SearchForm
          search-route="gallery"
          initial-search-prompt="painting"
          :search-prompts="searchPrompts"
        />
      </template>
      <template #slot-col-2>
        <HeroImage :hero-images="ARTWORK_HERO" />
      </template>
    </NuxtLayout>
    <!-- End of Hero -->
    <!-- Spotlights -->
    <SpotlightsHeader />
    <SpotlightsCarousel :slides="ARTWORK_SPOTLIGHTS" />
    <!-- End of Spotlights -->
  </main>
</template>
