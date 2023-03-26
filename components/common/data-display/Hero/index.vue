<script lang="ts" setup>
import { useArtworksStore } from '~/stores/artwork'
const artworksStore = useArtworksStore()

defineProps({
  heroImage: {
    type: Object,
    required: true,
  },
})

// definePageMeta({
//   layout: 'two-column',
// })

const ARTWORK_HERO = computed(() => artworksStore.ARTWORK_HERO)
</script>

<template>
  <TwoColumnLayout>
    <template #slot-col-1>
      <HeroHeadline />
      <ArtworkSearchForm
        search-for-route="/ArtworkResults"
        :search-prompts="['painting', 'drawing', 'studio', 'landscape']"
      />
    </template>
    <template #slot-col-2>
      <HeroImage :hero-images="ARTWORK_HERO" />
    </template>
  </TwoColumnLayout>
</template>
