<template>
  <NuxtLayout name="gallery">
    <ArtworkFiltersSidebar isOpen />
    <Aside
      v-show="settingsStore.state.showAside === true"
      :currentItem="selectedArtwork"
      :slides="displayedArtworks"
    />

    <ArtworkGalleryLayout>
      <template v-for="(item, i) in displayedArtworks" :key="item._id">
        <ArtworkGalleryGridCard
          :data="item"
          :index="i"
          @open-aside="openAside(item)"
          @switch="switch"
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
const router = useRouter();
const route = useRoute();
onMounted(() => {
  artworksStore.FETCH_ARTWORKS('/' + route.params.category);
});
const currentSlideIndex = ref(0);
const filteredArtworks = computed(() => artworksStore.FILTERED_ARTWORKS);
const resPerPage = settingsStore.state.resPerPage;
const elements = ref([]);
onBeforeMount(() => window.addEventListener('keydown', handleKeyDown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyDown));

// Previous and Next Pages
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
  displayedArtworks.value[currentSlideIndex.value]
);

function openAside(artwork: IArtwork) {
  selectedArtwork.value = artwork;
  settingsStore.state.showAside = true;
}

function next() {
  console.log('currentSlideIndex.value', currentSlideIndex.value);
  if (
    currentSlideIndex.value === resPerPage - 1 &&
    currentPage.value === maxPage.value
  ) {
    currentSlideIndex.value = resPerPage - 1;
    return;
  }
  currentSlideIndex.value++;
  selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
  if (currentSlideIndex.value === resPerPage - 1 && nextPage.value) {
    router.replace(`${route.params.category}?page=${nextPage.value}`);
    currentSlideIndex.value = 0;
  }
}

function prev() {
  if (currentSlideIndex.value === 0 && currentPage.value === 1) return;
  if (currentSlideIndex.value === 0 && currentPage.value >= 1) {
    currentSlideIndex.value--;
    selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
    router.replace(`${route.params.category}?page=${previousPage.value}`);
    currentSlideIndex.value = resPerPage - 1;
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
