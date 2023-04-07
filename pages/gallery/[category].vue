<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useArtworksStore } from '~/stores/artwork';
import { useSettingsStore } from '~/stores/settings';

const { toTitleCase } = useUtilities();

defineProps({
  selectedArtwork: {
    type: Object,
    required: true,
  },
});

definePageMeta({
  layout: 'gallery',
});

// const refreshing = ref(false);
// const refreshAll = async () => {
//   refreshing.value = true;
//   try {
//     await refreshNuxtData();
//   } finally {
//     refreshing.value = false;
//   }
// };

// onBeforeMount(refreshAll);

const route = useRoute();

useHead({
  title: toTitleCase(route.params.category),
});

const artworksStore = useArtworksStore();
// const categorizedArtworks = artworksStore.FETCH_ARTWORKS(
//   '/' + route.params.category
// );
onMounted(() => {
  artworksStore.FETCH_ARTWORKS('/' + route.params.category);
});

const FILTERED_ARTWORKS = computed(() => artworksStore.FILTERED_ARTWORKS);

const currentPage = computed(() =>
  Number.parseInt((route.query.page as string) || '1')
);
const maxPage = computed(() => Math.ceil(FILTERED_ARTWORKS.value.length / 24));

const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);

const displayedArtworks = computed(() => {
  const pageNumber = currentPage.value;
  const firstArtworkIndex = (pageNumber - 1) * 24;
  const lastArtworkIndex = pageNumber * 24;
  return FILTERED_ARTWORKS.value.slice(firstArtworkIndex, lastArtworkIndex);
});

const settingsStore = useSettingsStore();

const currentCard = ref();
const cardHover = ref(false);
const cardClicked = ref(false);
const showAside = ref(settingsStore.state.showAside);

defineEmits(['card-clicked']);

// const showAside = ref<boolean>(false);

const openAside = (artwork) => {
  settingsStore.state.showAside = true;
  // showAside.value = !showAside.value;
  cardHover.value = false;
  currentCard.value = artwork;
  cardClicked.value = artwork;
  console.log(currentCard.value);
};

const showHoverModal = (artwork) => {
  if (showAside) {
    return;
  } else {
    currentCard.value = artwork;
    cardHover.value = !cardHover.value;
  }
};
</script>

<template>
  <section class="flex flex-row">
    <ArtworkFiltersSidebar isOpen="true" />
    <Aside
      v-show="settingsStore.state.showAside === true"
      v-if="cardClicked"
      :artwork="currentCard"
      :artworks="displayedArtworks"
      :class="[cardClicked ? 'w-1/3' : 'w-0']"
      class="fixed right-0"
    />
    <!--     
    <Aside
      v-if="cardClicked"
      :artwork="currentCard"
      :class="[cardClicked ? 'w-1/2' : 'w-0']"
    /> -->

    <main
      class="gallery-cards-wrapper bg-brand-gray-2"
      :class="[
        settingsStore.state.showAside === false
          ? 'mx-auto w-full'
          : 'absolute left-0 w-2/3',
      ]"
    >
      <ModalHover v-if="cardHover" :artwork="currentCard" />
      <ArtworkGalleryGridCards>
        <Card
          v-for="artwork in displayedArtworks"
          :key="artwork._id"
          :file="artwork"
          @mouseenter="showHoverModal(artwork)"
          @click="openAside(artwork)"
        >
          <!-- @mouseout="showAside = false" -->
        </Card>
        <!-- <div v-show="currentCard"> -->
        <!-- <ModalHover :artwork="currentCard" /> -->
        <!-- </div> -->
      </ArtworkGalleryGridCards>

      <div class="mx-auto mt-8">
        <div class="flex flex-row flex-nowrap">
          <p class="flex-grow text-sm">Page {{ currentPage }}</p>

          <div class="flex items-center justify-center">
            <NuxtLink
              v-if="previousPage"
              role="link"
              :to="{ name: 'gallery', query: { page: previousPage } }"
              class="mx-3 text-sm font-semibold text-brand-blue-1"
              >Previous</NuxtLink
            >

            <NuxtLink
              v-if="nextPage"
              role="link"
              :to="{ name: 'gallery', query: { page: nextPage } }"
              class="mx-3 text-sm font-semibold text-brand-blue-1"
              >Next</NuxtLink
            >
          </div>
        </div>
      </div>
    </main>
  </section>
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
}
</style>
