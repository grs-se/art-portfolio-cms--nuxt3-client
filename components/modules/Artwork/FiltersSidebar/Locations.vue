<script lang="ts" setup>
import { useArtworksStore } from '@/stores/artwork'
import { useUserMovementsStore } from '@/stores/userMovement'
import { ArtworkFiltersSidebarCheckboxGroup } from '~~/.nuxt/components'

const artworksStore = useArtworksStore()

const UNIQUE_ARTWORK_LOCATIONS = computed(
  () => artworksStore.UNIQUE_ARTWORK_LOCATIONS
)

const userMovementsStore = useUserMovementsStore()
</script>

<template>
  <ArtworkFiltersSidebarCheckboxGroup
    class="capitalize"
    :unique-values="UNIQUE_ARTWORK_LOCATIONS"
    :action="userMovementsStore.ADD_SELECTED_ARTWORK_LOCATIONS"
  />
</template>
