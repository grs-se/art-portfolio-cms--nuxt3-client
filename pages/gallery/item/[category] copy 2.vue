<template>
  <NuxtLayout name="gallery">
    <ArtworkFiltersSidebar isOpen />
    <Aside
      v-show="settingsStore.state.showAside === true"
      :currentItem="selectedArtwork"
      :items="displayedArtworks"
    />

    <ArtworkGalleryLayout>
      <template v-for="(item, i) in displayedArtworks" :key="item._id">
        <ArtworkGalleryGridCard
          :data="item"
          :index="i"
          @open-aside="openAside(item)"
          @switch="switchSlide"
          :ref="(el) => (elements[i] = el)"
        >
        </ArtworkGalleryGridCard>
      </template>

      <template #pagination>
        <Pagination
          :current-page="currentPage"
          :previous-page="previousPage"
          :next-page="nextPage"
        />
      </template>
    </ArtworkGalleryLayout>
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useArtworksStore } from '~/stores/artwork';
import { useSettingsStore } from '~/stores/settings';
import { IArtwork } from '~~/types';
const settingsStore = useSettingsStore();
const artworksStore = useArtworksStore();
const route = useRoute();
onMounted(() => {
  artworksStore.FETCH_ARTWORKS(route.params.category.toString());
});
onBeforeMount(() => window.addEventListener('keydown', handleKeyDown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyDown));
const currentSlide = ref(0);
const filteredArtworks = computed(() => artworksStore.FILTERED_ARTWORKS);
const resPerPage = settingsStore.state.resPerPage;
const elements = ref([]);

const currentPage = computed(() =>
  Number.parseInt((route.query.page as string) || '1')
);
const maxPage = computed(() =>
  Math.ceil(filteredArtworks.value.length / resPerPage)
);
const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);
const displayedArtworks = computed(() => {
  const pageNumber = currentPage.value;
  const firstArtworkIndex = (pageNumber - 1) * resPerPage;
  const lastArtworkIndex = pageNumber * resPerPage;
  return filteredArtworks.value.slice(firstArtworkIndex, lastArtworkIndex);
});
const selectedArtwork = ref<IArtwork>(
  displayedArtworks.value[currentSlide.value]
);
function openAside(artwork: IArtwork) {
  settingsStore.showAside();
  selectedArtwork.value = artwork;
}
function next(step = 1) {
  const index =
    currentSlide.value < displayedArtworks.value.length - 1
      ? currentSlide.value + step
      : 0;
  setCurrentSlide(index);
  // if (
  //   currentSlide.value === resPerPage - 1 &&
  //   currentPage.value === maxPage.value
  // ) {
  //   currentSlide.value = resPerPage - 1;
  //   return;
  // }
  // currentSlide.value++;
  // selectedArtwork.value = displayedArtworks.value[currentSlide.value];
  // if (currentSlide.value === resPerPage - 1 && nextPage.value) {
  //   router.replace({
  //     query: { page: nextPage.value },
  //   });
  //   currentSlide.value = 0;
  // }
}
function prev(step = -1) {
  const index =
    currentSlide.value > 0
      ? currentSlide.value + step
      : displayedArtworks.value.length - 1;
  setCurrentSlide(index);
  // if (currentSlide.value === 0 && currentPage.value === 1) return;
  // if (currentSlide.value === 0 && currentPage.value > 1) {
  //   // currentSlide.value--;
  //   // selectedArtwork.value = displayedArtworks.value[currentSlide.value];
  //   // router.replace({
  //   //   query: { page: previousPage.value },
  //   // });
  //   // currentSlide.value = resPerPage - 1;
  // }
}
function setCurrentSlide(index: number) {
  currentSlide.value = index;
}
function switchSlide(index: number) {
  const step = index - currentSlide.value;
  if (step > 0) {
    next(step);
  } else {
    prev(step);
  }
}
function handleKeyDown(e: KeyboardEvent) {
  switch (e.key) {
    case 'ArrowLeft':
      prev();
      break;
    case 'ArrowRight':
      next();
      break;
  }
}
</script>
