import { defineStore } from 'pinia';

import createSetFromNestedArray from '~/utils/createSetFromNestedArray';

import { useFiltersStore } from '~/stores/filters';

export const FETCH_TEXTS = 'FETCH_TEXTS';
export const UNIQUE_TEXT_CATEGORIES = 'UNIQUE_TEXT_CATEGORIES';
export const INCLUDE_TEXT_BY_CATEGORY = 'INCLUDE_TEXT_BY_CATEGORY';
export const FILTERED_TEXTS = 'FILTERED_TEXTS';

export interface TextsState {
  texts: Text[];
}

export const useTextsStore = defineStore('texts', {
  state: (): TextsState => ({
    texts: [],
  }),
  actions: {
    async [FETCH_TEXTS]() {
      const { $axiosApi } = useNuxtApp();
      const texts = await $axiosApi.text.getTexts();
      this.texts = texts;
    },
  },
  getters: {
    [UNIQUE_TEXT_CATEGORIES](state) {
      return createSetFromNestedArray(state.texts, 'categories');
    },

    [INCLUDE_TEXT_BY_CATEGORY]: () => (text: Text) => {
      const filtersStore = useFiltersStore();
      if (filtersStore.selectedTextCategories.length === 0) return true;
      return text.categories.some((cat: string) =>
        filtersStore.selectedTextCategories.includes(cat)
      );
    },

    [FILTERED_TEXTS](state): Text[] {
      return state.texts.filter((text) => this.INCLUDE_TEXT_BY_CATEGORY(text));
    },
  },
});
