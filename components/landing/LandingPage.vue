<script lang="ts" setup>
import { useArtworksStore } from '~/stores/artwork'

const artworksStore = useArtworksStore()
onMounted(artworksStore.FETCH_ARTWORKS)
const slides = computed(() => artworksStore.FILTERED_ARTWORKS)

const showToast = ref(false)
</script>

<template>
  <main>
    <Hero />
    <SpotLightsHeader />
    <SlideShow />
    <Carousel
      :slides="slides"
      :controls="true"
      :indicators="false"
      class="mb-40"
    />
    <button @click="showToast = true">Show Toast</button>
    <Toast
      message="Message has been sent"
      :show="showToast"
      @hide="showToast = false"
      type="error"
      position="bottom-right"
    />
  </main>
</template>
