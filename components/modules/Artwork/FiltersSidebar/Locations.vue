<script lang="ts" setup>
import { useArtworksStore } from '~/stores/artwork'
import { useFiltersStore } from '~/stores/filters'

const artworksStore = useArtworksStore()

const UNIQUE_ARTWORK_LOCATIONS = computed(
  () => artworksStore.UNIQUE_ARTWORK_LOCATIONS
)

const filtersStore = useFiltersStore()
</script>

<template>
  <ArtworkFiltersSidebarCheckboxGroup
    class="capitalize"
    :unique-values="UNIQUE_ARTWORK_LOCATIONS"
    :action="filtersStore.ADD_SELECTED_ARTWORK_LOCATIONS"
  />
</template>
