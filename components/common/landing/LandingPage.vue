<script lang="ts" setup>
import { useArtworksStore } from '~/stores/artwork'

const artworksStore = useArtworksStore()
onMounted(artworksStore.FETCH_ARTWORKS)

const slides = computed(() => artworksStore.FILTERED_ARTWORKS)
const spotlights = computed(() => artworksStore.ARTWORK_SPOTLIGHTS)
const hero = computed(() => artworksStore.ARTWORK_HERO)

const searchPrompts = reactive(['painting', 'drawing', 'studio', 'landscape'])
</script>

<template>
  <main class="container">
    <!-- Hero -->
    <TwoColumnSection>
      <template #slot-col-1>
        <HeroHeadline action="" />
        <SearchForm
          search-route="gallery"
          initial-search-prompt="painting"
          :search-prompts="searchPrompts"
        />
      </template>
      <template #slot-col-2>
        <HeroImage :hero="hero" />
      </template>
    </TwoColumnSection>
    <!-- End of Hero -->
    <!-- Spotlights -->
    <SpotlightsHeader />
    <SpotlightsSlides :spotlights="spotlights" />
    <!-- End of Spotlights -->
  </main>
</template>
