<script lang="ts" setup>
import { useFiltersStore } from '~/stores/filters'

const filtersStore = useFiltersStore()
</script>

<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base">Gallery Options</h3>
    <div class="flex items-center text-sm">
      <ActionButton
        text="Clear Filters"
        btn="tertiary"
        @click="filtersStore.CLEAR_USER_ARTWORK_FILTER_SELECTIONS"
      />
    </div>
  </div>
</template>
