<script lang="ts" setup>
import { useArtworksStore } from '~/stores/artwork'
import { useFiltersStore } from '~/stores/filters'

const artworksStore = useArtworksStore()
const UNIQUE_ARTWORK_CATEGORIES = computed(
  () => artworksStore.UNIQUE_ARTWORK_CATEGORIES
)

const filtersStore = useFiltersStore()
</script>

<template>
  <ArtworkFiltersSidebarCheckboxGroup
    class="capitalize"
    :unique-values="UNIQUE_ARTWORK_CATEGORIES"
    :action="filtersStore.ADD_SELECTED_ARTWORK_CATEGORIES"
  />
</template>
