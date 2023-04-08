<template>
  <div class="flex flex-row">
    <button v-for="link in links" :key="link.text" class="mx-2">
      <router-link
        :to="`/gallery${link.url}`"
        class="rounded-2xl border-1 border-brand-gray-1 px-3 py-1 hover:border-gray-300 hover:shadow-sm"
      >
        <span class="capitalize">{{ link.text }}</span>
      </router-link>
    </button>
  </div>
</template>

<script lang="ts" setup>
// import { useArtworksStore } from '~~/stores/artwork';
// const artworksStore = useArtworksStore();

// const UNIQUE_ARTWORK_CATEGORIES = computed(
//   () => artworksStore.UNIQUE_ARTWORK_CATEGORIES
// );

const links = ref([
  { text: 'Drawing', url: '/drawing' },
  { text: 'Painting', url: '/painting' },
  { text: 'Observation', url: '/observation' },
  { text: 'Landscape', url: '/landscape' },
  { text: 'Studio', url: '/studio' },
  { text: 'Abstract', url: '/abstract' },
  { text: 'Naive', url: '/naive' },
]);

// $route.params

const router = useRouter();

// const selectValue = () => {
//   props.action(selectedValues.value);
//   router.push({ name: 'ArtworkResults' });
// };
</script>

<style scoped lang="scss">
.router-link-active {
  border: 1px solid black;
}
</style>
