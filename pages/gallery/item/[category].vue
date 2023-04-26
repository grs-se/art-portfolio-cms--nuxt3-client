<script lang="ts" setup>
import { useArtworksStore } from '~/stores/artwork';
import { useSettingsStore } from '~/stores/settings';
import { IArtwork } from '~~/types';
const artworksStore = useArtworksStore();
const settingsStore = useSettingsStore();

const { toTitleCase } = useUtilities();
const router = useRouter();
const route = useRoute();
useHead({
  title: toTitleCase(route.params.category),
});

onMounted(() => {
  artworksStore.FETCH_ARTWORKS('/' + route.params.category);
});

const filteredArtworks = computed(() => artworksStore.FILTERED_ARTWORKS);

const resPerPage = settingsStore.state.resPerPage;

const currentPage = computed(() =>
  Number.parseInt((route.query.page as string) || '1')
);
const maxPage = computed(() =>
  Math.ceil(filteredArtworks.value.length / resPerPage)
);

const excess = computed(() =>
  Math.ceil(filteredArtworks.value.length % resPerPage)
);

console.log('excess', excess.value);

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

// const artworkIndex = () => {
//   console.log('displayedArtworks', displayedArtworks.value.length);
// };

// const artworksIndex = () => {
//   let i;
//   for (i = 0; i < displayedArtworks.value.length; i++) {
//     console.log(displayedArtworks.value[i]);
//     return displayedArtworks.value[i];
//   }
// };

// for (let [index, value] of displayedArtworks.value.entries()) {
//   console.log(index, value);
// }

/*
// const artworksIndex = () => {
//   for (let [index, value] of displayedArtworks.value.entries()) {
//     console.log(index, value);
//     return [index, value];
//   }
// };
// artworksIndex();
*/

// const { index, value } = artworksIndex();

// onMounted(artworksIndex);
// console.log('artworksIndex', artworksIndex, displayedArtworks.value.length);

const currentSlideIndex = ref(0);

const showAside = ref(settingsStore.state.showAside);
const selectedArtwork = ref<IArtwork>(
  displayedArtworks.value[currentSlideIndex.value]
);
const cardHover = ref(false);

defineEmits(['card-clicked']);

const openAside = (artwork: IArtwork) => {
  selectedArtwork.value = artwork;
  settingsStore.state.showAside = true;
  cardHover.value = false;
};

// const artworkIndex = ref();

// onMounted(() => {
//   console.log('ref:artworkIndex', artworkIndex.value);
//   return artworkIndex.value;
// });

const elements = ref([]);
onMounted(() => {
  console.log('elements', elements.value);
});

const next = () => {
  console.log(currentSlideIndex.value);
  if (
    currentSlideIndex.value === resPerPage - 1 &&
    currentPage.value === maxPage.value
  ) {
    currentSlideIndex.value = resPerPage - 1;
    return;
  }
  // if (
  //   currentSlideIndex.value != resPerPage - 1 &&
  //   currentPage.value != maxPage.value
  // ) {
  currentSlideIndex.value++;
  selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
  if (currentSlideIndex.value === resPerPage - 1 && nextPage.value) {
    router.replace(`${route.params.category}?page=${nextPage.value}`);
    currentSlideIndex.value = 0;
  }
};
// };

const prev = () => {
  if (currentSlideIndex.value === 0 && currentPage.value === 1) return;
  if (currentSlideIndex.value === 0 && currentPage.value >= 1) {
    currentSlideIndex.value--;
    selectedArtwork.value = displayedArtworks.value[currentSlideIndex.value];
    router.replace(`${route.params.category}?page=${previousPage.value}`);
    currentSlideIndex.value = resPerPage - 1;
  }
};

const handleKeyDown = (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowLeft':
      prev();
      break;
    case 'ArrowRight':
      next();
      break;
  }
};

onBeforeMount(() => window.addEventListener('keydown', handleKeyDown));
onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyDown));

const showHoverModal = (artwork: IArtwork) => {
  if (showAside) {
    return;
  } else {
    // clickedCard.value = artwork;
    cardHover.value = !cardHover.value;
  }
};
</script>

<template>
  <NuxtLayout name="gallery">
    <ArtworkFiltersSidebar isOpen />
    <Aside
      v-show="displayedArtworks && settingsStore.state.showAside === true"
      :currentItem="selectedArtwork"
      :slides="displayedArtworks"
    />

    <ArtworkGalleryLayout>
      <ArtworkGalleryGridCards
        v-for="(item, i) in displayedArtworks"
        :key="item._id"
        :data="item"
        :index="i"
        @open-aside="openAside(item)"
        @switch="switch"
        :ref="(el) => (elements[i] = el)"
      >
      </ArtworkGalleryGridCards>

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
