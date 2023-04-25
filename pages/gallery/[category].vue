<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useArtworksStore } from '~/stores/artwork';
import { useSettingsStore } from '~/stores/settings';
import { IArtwork } from '~~/types';
const artworksStore = useArtworksStore();
const settingsStore = useSettingsStore();

const { toTitleCase } = useUtilities();
const route = useRoute();
useHead({
  title: toTitleCase(route.params.category),
});

onMounted(() => {
  artworksStore.FETCH_ARTWORKS('/' + route.params.category);
});

const filteredArtworks = computed(() => artworksStore.FILTERED_ARTWORKS);

const currentPage = computed(() =>
  Number.parseInt((route.query.page as string) || '1')
);
const maxPage = computed(() => Math.ceil(filteredArtworks.value.length / 24));

const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);

const displayedArtworks = computed(() => {
  const pageNumber = currentPage.value;
  const firstArtworkIndex = (pageNumber - 1) * 24;
  const lastArtworkIndex = pageNumber * 24;
  return filteredArtworks.value.slice(firstArtworkIndex, lastArtworkIndex);
});

const showAside = ref(settingsStore.state.showAside);
const asideArtwork = ref<IArtwork>(displayedArtworks.value[0]);
const cardHover = ref(false);

defineEmits(['card-clicked']);

const openAside = (artwork: IArtwork) => {
  asideArtwork.value = artwork;
  settingsStore.state.showAside = true;
  cardHover.value = false;
};

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
        :currentArtwork="asideArtwork"
        :slides="displayedArtworks"
        :class="[asideArtwork ? 'w-1/3' : 'w-0']"
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
          <Card
            v-for="artwork in displayedArtworks"
            :key="artwork._id"
            :file="artwork"
            @mouseenter="showHoverModal(artwork)"
            @click="openAside(artwork)"
          >
          </Card>
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
