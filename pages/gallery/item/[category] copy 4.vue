<template>
  <NuxtLayout name="gallery">
    <!-- <button @click="changeGalleryMode">Change Gallery Mode</button> -->
    <ArtworkFiltersSidebar isOpen />
    <Aside
      v-show="settingsStore.state.showAside === true"
      :currentItem="selectedArtwork"
      :slides="displayedArtworks"
    />

    <ArtworkGalleryLayout>
      <template v-for="(item, i) in displayedArtworks" :key="item._id">
        <ArtworkGalleryGridCard
          v-if="appConfigStore.galleryMode === GalleryMode.GRID"
          :data="item"
          :index="i"
          @open-aside="openAside(item)"
          @click="switchSlide(item, i)"
          :ref="(el) => (elements[i] = el)"
        >
        </ArtworkGalleryGridCard>
        <ArtworkGalleryMasonry
          v-if="appConfigStore.galleryMode === GalleryMode.MASONRY"
          :data="item"
          :index="i"
          @open-aside="openAside(item)"
          @click="switchSlide(item, i)"
          :ref="(el) => (elements[i] = el)"
        >
        </ArtworkGalleryMasonry>
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
// const galleryMode = computed(() => {
//   return appConfig.galleryMode;
// });
import { IArtwork } from '~~/types';
import { GalleryMode } from '@/store/types';

const appConfigStore = useAppConfigStore();
const settingsStore = useSettingsStore();
const artworksStore = useArtworksStore();
const router = useRouter();
const route = useRoute();
onMounted(() => {
  artworksStore.FETCH_ARTWORKS(route.params.category.toString());
});
onBeforeMount(() => window.addEventListener('keydown', handleKeyDown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyDown));
const filteredArtworks = computed(() => artworksStore.FILTERED_ARTWORKS);
const resPerPage = settingsStore.state.resPerPage;
const elements = ref([]);

const galleryMode = computed(() => {
  return appConfigStore.galleryMode;
});

const changeGalleryMode = computed(() => {
  appConfigStore.galleryMode = GalleryMode.MASONRY;
});

const currentSlide = ref(0);
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
const showAside = ref(settingsStore.state.showAside);

const selectedArtwork = ref<IArtwork>(
  displayedArtworks.value[currentSlide.value]
);

function switchSlide(item: IArtwork, index: number) {
  currentSlide.value = index;
  console.log(index);
}
onMounted(() => {});

function openAside(artwork: IArtwork) {
  selectedArtwork.value = artwork;
  settingsStore.state.showAside = true;
}

function next() {
  console.log('currentSlide.value', currentSlide.value);
  if (
    currentSlide.value === resPerPage - 1 &&
    currentPage.value === maxPage.value
  ) {
    currentSlide.value = resPerPage - 1;
    return;
  }
  currentSlide.value++;
  selectedArtwork.value = displayedArtworks.value[currentSlide.value];
  if (currentSlide.value === resPerPage - 1 && nextPage.value) {
    router.replace(`${route.params.category}?page=${nextPage.value}`);
    currentSlide.value = 0;
  }
}

function prev() {
  if (currentSlide.value === 0 && currentPage.value === 1) return;
  if (currentSlide.value === 0 && currentPage.value >= 1) {
    currentSlide.value--;
    selectedArtwork.value = displayedArtworks.value[currentSlide.value];
    router.replace(`${route.params.category}?page=${previousPage.value}`);
    currentSlide.value = resPerPage - 1;
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
