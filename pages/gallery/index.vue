<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useArtworksStore } from '~/stores/artwork';
import GalleryLayout from '~~/layouts/gallery.vue';

defineProps({
  selectedArtwork: {
    type: Object,
    required: true,
  },
});

const artworksStore = useArtworksStore();
onMounted(artworksStore.FETCH_ARTWORKS);

const FILTERED_ARTWORKS = computed(() => artworksStore.FILTERED_ARTWORKS);

const route = useRoute();
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

const currentCard = ref();
const cardHover = ref(false);
const cardClicked = ref(false);
const openAside = ref(false);

defineEmits(['card-clicked']);

// const showAside = ref<boolean>(false);
const showAside = (artwork) => {
  openAside.value = true;
  cardHover.value = false;
  currentCard.value = artwork;
  cardClicked.value = artwork;
  console.log(currentCard.value);
};

const showHoverModal = (artwork) => {
  if (openAside) {
    return;
  } else {
    currentCard.value = artwork;
    cardHover.value = !cardHover.value;
  }
};
</script>

<template>
  <NuxtLayout name="gallery">
    <div class="relative flex w-full flex-nowrap xs:flex-col md:flex-row">
      <ArtworkFiltersSidebar />
      <section :class="[cardClicked ? 'flex columns-2 flex-row-reverse' : '']">
        <Aside
          v-if="cardClicked"
          :artwork="currentCard"
          :artworks="displayedArtworks"
          :class="[cardClicked ? 'w-1/3' : 'w-0']"
        />
        <!--     
    <Aside
      v-if="cardClicked"
      :artwork="currentCard"
      :class="[cardClicked ? 'w-1/2' : 'w-0']"
    /> -->

        <main
          id="gallery-wrapper"
          class="relative mx-auto bg-brand-gray-2 xl:p-8"
          :class="[!cardClicked ? 'w-full' : 'w-2/3']"
        >
          <ModalHover v-if="cardHover" :artwork="currentCard" />
          <ArtworkGalleryGridCards>
            <Card
              v-for="artwork in displayedArtworks"
              :key="artwork._id"
              :file="artwork"
              @mouseenter="showHoverModal(artwork)"
              @click="showAside(artwork)"
              class=""
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
                  :to="{ name: 'artworks', query: { page: previousPage } }"
                  class="mx-3 text-sm font-semibold text-brand-blue-1"
                  >Previous</NuxtLink
                >

                <NuxtLink
                  v-if="nextPage"
                  role="link"
                  :to="{ name: 'artworks', query: { page: nextPage } }"
                  class="mx-3 text-sm font-semibold text-brand-blue-1"
                  >Next</NuxtLink
                >
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  </NuxtLayout>
</template>
