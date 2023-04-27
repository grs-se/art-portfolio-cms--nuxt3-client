<script lang="ts" setup>
import { before } from 'node:test';
import { useRoute } from 'vue-router';
import { useArtworksStore } from '~~/store/modules/artwork';
import { useSettingsStore } from '~/store/modules/settings';
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

const artworkIndex = ref(0);

onMounted(() => {
  console.log('ref:artworkIndex', artworkIndex.value);
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
  <NuxtLayout name="gallery" class="gallery-layout">
    <section class="flex flex-row">
      <ArtworkFiltersSidebar isOpen />
      <Aside
        v-show="settingsStore.state.showAside === true"
        :currentArtwork="selectedArtwork"
        :slides="displayedArtworks"
        :class="[settingsStore.state.showAside === true ? 'w-1/3' : 'w-0']"
      />
      <main
        class="gallery-cards-wrapper"
        :class="[
          settingsStore.state.showAside === false
            ? 'mx-auto w-full'
            : 'absolute left-0 w-2/3',
        ]"
      >
        <!-- <ModalHover v-if="cardHover" :currentArtwork="currentCard" /> -->
        <ArtworkGalleryGridCards>
          <!-- <ArtworkGalleryGridCards
            v-for="item in displayedArtworks"
            :key="`card-${item.id}`"
            :file="item"
            @mouseenter="showHoverModal(item)"
            @click="openAside(item)"
          > -->
          <ArtworkGalleryGridCard
            v-for="(item, index) in displayedArtworks"
            :key="index"
            :file="item"
            :index="index"
            ref="artworkIndex"
          >
          </ArtworkGalleryGridCard>
        </ArtworkGalleryGridCards>

        <div class="mx-auto mt-8">
          <div class="flex flex-row flex-nowrap">
            <p class="flex-grow text-sm">Page {{ currentPage }}</p>

            <div class="flex items-center justify-center">
              <NuxtLink
                v-if="previousPage"
                role="link"
                :to="{
                  name: `${String(route.name)}`,
                  query: { page: previousPage },
                }"
                class="mx-3 text-sm font-semibold text-brand-blue-1"
                >Previous</NuxtLink
              >

              <NuxtLink
                v-if="nextPage"
                @click="artworkIndex"
                role="link"
                :to="{
                  name: `${String(route.name)}`,
                  query: { page: nextPage },
                }"
                class="mx-3 text-sm font-semibold text-brand-blue-1"
                >Next</NuxtLink
              >
            </div>
          </div>
        </div>
      </main>
    </section>
  </NuxtLayout>
</template>
<style scoped>
/* .gallery-layout {
  width: 150vw;
} */
/* .gallery-wrapper {
  relative flex w-full flex-nowrap xs:flex-col md:flex-row
} */
.gallery-cards-wrapper {
  position: relative;
  /* margin: 0 auto; */
  background: white;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  overflow-y: scroll;
  height: 100vh;
}
</style>
