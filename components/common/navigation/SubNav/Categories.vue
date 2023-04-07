<template>
  <div class="flex flex-row">
    <router-link
      v-for="link in links"
      :key="link.text"
      :to="`/gallery${link.url}`"
      class="mx-2"
    >
      <button
        class="rounded-2xl border-1 border-brand-gray-1 px-3 py-1 hover:border-gray-300 hover:shadow-sm"
      >
        <span class="capitalize">{{ link.text }}</span>
      </button>
    </router-link>
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
  { text: 'Studio', url: '/studio' },
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
  background-color: blue;
}
</style>
