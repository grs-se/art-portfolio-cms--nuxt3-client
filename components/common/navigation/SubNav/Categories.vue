<template>
  <ul class="flex flex-row" v-for="category in UNIQUE_ARTWORK_CATEGORIES">
    <li class="mx-2">
      <button
        class="rounded-2xl border-1 border-brand-gray-1 px-3 py-1 hover:border-gray-300 hover:shadow-sm"
      >
        <span class="capitalize">{{ category }}</span>
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
// import { useArtworksStore } from '~~/stores/artwork';
// const artworksStore = useArtworksStore();

// const UNIQUE_ARTWORK_CATEGORIES = computed(
//   () => artworksStore.UNIQUE_ARTWORK_CATEGORIES
// );
const UNIQUE_ARTWORK_CATEGORIES = reactive([
  'drawing',
  'painting',
  'studio',
  'observation',
]);
</script>
