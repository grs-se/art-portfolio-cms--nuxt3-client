<template>
  <NuxtLayout name="gallery">
    <!-- <button @click="changeGalleryMode">Change Gallery Mode</button> -->
    <ArtworkFiltersSidebar isOpen />
    <Aside
      v-show="settingsStore.state.showAside === true"
      :currentItem="selectedArtwork"
      :slides="displayedResults"
    />

    <ArtworkGalleryLayout>
      <template v-for="(item, index) in displayedResults" :key="item._id">
        <ArtworkGalleryGridCard
          :data="item"
          :index="index"
          @open-aside="openAside(item)"
          @click="setCurrentSlide(index)"
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
import useAppConfigStore from '~~/store/modules/app-config';
import { useSettingsStore } from '~~/store/modules/settings';
import { useArtworksStore } from '~~/store/modules/artwork';
import { IArtwork } from '~~/types';
import { GalleryMode } from '@/store/types';
const appConfigStore = useAppConfigStore();
const settingsStore = useSettingsStore();
const artworksStore = useArtworksStore();
const router = useRouter();
const route = useRoute();
const filteredArtworks = computed(() => artworksStore.FILTERED_ARTWORKS);
const maxResPerPage = settingsStore.state.maxResPerPage;
const currentSlide = ref(0);
const currentPage = computed(() =>
  Number.parseInt((route.query.page as string) || '1')
);
const maxPage = computed(() =>
  Math.ceil(filteredArtworks.value.length / maxResPerPage)
);
const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);
const displayedResults = computed(() => {
  const pageNumber = currentPage.value;
  const firstArtworkIndex = (pageNumber - 1) * maxResPerPage;
  const lastArtworkIndex = pageNumber * maxResPerPage;
  return filteredArtworks.value.slice(firstArtworkIndex, lastArtworkIndex);
});
const showAside = ref(settingsStore.state.showAside);
const selectedArtwork = ref<IArtwork>(
  displayedResults.value[currentSlide.value]
);
function openAside(artwork: IArtwork) {
  settingsStore.state.showAside === true;
  selectedArtwork.value = artwork;
}
function next(step = 1) {
  if (
    currentPage.value === maxPage.value &&
    currentSlide.value === displayedResults.value.length - 1
  )
    return;
  setCurrentSlide(currentSlide.value + step);
  if (
    currentSlide.value === displayedResults.value.length - 1 &&
    nextPage.value
  ) {
    setCurrentSlide(0);
    router.replace({
      query: { page: nextPage.value },
    });
  }
}
function prev(step = -1) {
  if (currentSlide.value === 0 && currentPage.value === 1) return;
  setCurrentSlide(currentSlide.value + step);
  if (currentSlide.value === 0 && currentPage.value > 1) {
    router.replace({
      query: { page: previousPage.value },
    });
    currentSlide.value = displayedResults.value.length - 1;
  }
}
function setCurrentSlide(index: number) {
  currentSlide.value = index;
  selectedArtwork.value = displayedResults.value[currentSlide.value];
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
// const galleryMode = computed(() => {
//   return appConfigStore.galleryMode;
// });
// const changeGalleryMode = computed(() => {
//   appConfigStore.galleryMode = GalleryMode.MASONRY;
// });

onMounted(() => {
  artworksStore.FETCH_ARTWORKS(route.params.category.toString());
});
onBeforeMount(() => window.addEventListener('keydown', handleKeyDown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyDown));
</script>
