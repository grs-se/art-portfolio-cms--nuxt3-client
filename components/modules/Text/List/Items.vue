<template>
  <main class="w-full flex-auto bg-brand-gray-2 p-8">
    <ol>
      <text-list-item
        v-for="text in displayedTexts"
        :key="text._id"
        :text="text"
        class="mx-auto max-w-gallery"
      />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>

        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            :to="{ name: 'text', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </router-link>

          <router-link
            v-if="nextPage"
            role="link"
            :to="{ name: 'text', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useTextsStore } from '~/store/modules/text';

import usePreviousAndNextPages from '~/composables/usePreviousAndNextPages';

const textsStore = useTextsStore();
onMounted(textsStore.FETCH_TEXTS);

const FILTERED_TEXTS = computed(() => textsStore.FILTERED_TEXTS);

const route = useRoute();
const currentPage = computed(() =>
  Number.parseInt((route.query.page as string) || '1')
);
const maxPage = computed(() => Math.ceil(FILTERED_TEXTS.value.length / 10));

const { previousPage, nextPage } = usePreviousAndNextPages(
  currentPage,
  maxPage
);

const displayedTexts = computed(() => {
  const pageNumber = currentPage.value;
  const firstTextIndex = (pageNumber - 1) * 10;
  const lastTextIndex = pageNumber * 10;
  return FILTERED_TEXTS.value.slice(firstTextIndex, lastTextIndex);
});
</script>
