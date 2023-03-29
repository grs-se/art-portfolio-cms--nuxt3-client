<!-- <template>
  <NuxtLayout name="landing-page" />
</template> -->

<script lang="ts" setup>
// const { $api } = useNuxtApp();
import { useArtworksStore } from '~/stores/artwork';

const artworksStore = useArtworksStore();
onMounted(artworksStore.FETCH_ARTWORKS);

const spotlights = computed(() => artworksStore.ARTWORK_SPOTLIGHTS);
const hero = computed(() => artworksStore.ARTWORK_HERO);

// const spotlights = async () => {
//   try {
//     const response = await $api.art.getArtworks()
//   } catch (error) {
//     console.log(error)
//   }
// }
const searchPrompts = reactive(['painting', 'drawing', 'studio', 'landscape']);
</script>

<template>
  <main class="container">
    <!-- Hero -->
    <NuxtLayout name="two-column">
      <template #slot-col-1>
        <HeroHeadline
          headline="George Rice-Smith"
          sub-heading="Paintings & Drawings"
          action=""
        />
        <SearchForm
          search-route="artworks"
          initial-search-prompt="painting"
          :search-prompts="searchPrompts"
        />
      </template>
      <template #slot-col-2>
        <HeroImage :hero-image="hero" />
      </template>
    </NuxtLayout>
    <!-- End of Hero -->
    <!-- Spotlights -->
    <SpotlightsHeader />
    <SpotlightsSlides :spotlights="spotlights" />
    <!-- End of Spotlights -->
  </main>
</template>
