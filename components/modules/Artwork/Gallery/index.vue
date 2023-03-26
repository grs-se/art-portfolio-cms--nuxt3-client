<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useArtworksStore } from '~/stores/artwork'

const artworksStore = useArtworksStore()
onMounted(artworksStore.FETCH_ARTWORKS)

const FILTERED_ARTWORKS = computed(() => artworksStore.FILTERED_ARTWORKS)

const route = useRoute()
const currentPage = computed(() =>
  Number.parseInt((route.query.page as string) || '1')
)
const maxPage = computed(() => Math.ceil(FILTERED_ARTWORKS.value.length / 24))

const { previousPage, nextPage } = usePreviousAndNextPages(currentPage, maxPage)

const displayedArtworks = computed(() => {
  const pageNumber = currentPage.value
  const firstArtworkIndex = (pageNumber - 1) * 24
  const lastArtworkIndex = pageNumber * 24
  return FILTERED_ARTWORKS.value.slice(firstArtworkIndex, lastArtworkIndex)
})
</script>

<template>
  <main
    id="gallery-wrapper"
    class="relative mx-auto w-full bg-brand-gray-2 p-8"
  >
    <ArtworkGalleryGridCards>
      <Card
        v-for="artwork in displayedArtworks"
        :key="artwork._id"
        :file="artwork"
        class=""
      ></Card>
    </ArtworkGalleryGridCards>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <NuxtLink
            v-if="previousPage"
            role="link"
            :to="{ name: 'ArtworkResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Previous</NuxtLink
          >

          <NuxtLink
            v-if="nextPage"
            role="link"
            :to="{ name: 'ArtworkResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            >Next</NuxtLink
          >
        </div>
      </div>
    </div>
  </main>
</template>