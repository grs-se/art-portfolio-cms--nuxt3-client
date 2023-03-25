<script lang="ts" setup>
import { useArtworksStore } from '~/stores/artwork'
import { useUserMovementsStore } from '~/stores/userMovement'

const artworksStore = useArtworksStore()
const UNIQUE_ARTWORK_CATEGORIES = computed(
  () => artworksStore.UNIQUE_ARTWORK_CATEGORIES
)

const userMovementsStore = useUserMovementsStore()
</script>

<template>
  <ArtworkFiltersSidebarCheckboxGroup
    class="capitalize"
    :unique-values="UNIQUE_ARTWORK_CATEGORIES"
    :action="userMovementsStore.ADD_SELECTED_ARTWORK_CATEGORIES"
  />
</template>
