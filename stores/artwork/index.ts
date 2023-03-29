import { defineStore } from 'pinia';

import createSetFromNestedArray from '~/utils/createSetFromNestedArray';

import { useFiltersStore } from '~/stores/filters';
import { ArtworkActionTypes, ArtworkGetterTypes } from './action-getter-types';
import type { IArtwork } from '~/types';

export interface ArtworksState {
  artworks: IArtwork[];
}

export const FETCH_ARTWORKS = 'FETCH_ARTWORKS';
export const UNIQUE_ARTWORK_CATEGORIES = 'UNIQUE_ARTWORK_CATEGORIES';
export const UNIQUE_ARTWORK_LOCATIONS = 'UNIQUE_ARTWORK_LOCATIONS';
export const FILTERED_ARTWORKS = 'FILTERED_ARTWORKS';
export const ARTWORK_SPOTLIGHTS = 'ARTWORK_SPOTLIGHTS';
export const ARTWORK_HERO = 'ARTWORK_HERO';
export const INCLUDE_ARTWORK_BY_CATEGORY = 'INCLUDE_ARTWORK_BY_CATEGORY';
export const INCLUDE_ARTWORK_BY_LOCATION = 'INCLUDE_ARTWORK_BY_LOCATION';
export const INCLUDE_ARTWORK_BY_TAG = 'INCLUDE_ARTWORK_BY_TAG';
export const SORT_ARTWORKS_BY_DATE = 'SORT_ARTWORKS_BY_DATE';

export const useArtworksStore = defineStore('artworks', {
  state: (): ArtworksState => ({
    artworks: [],
  }),
  actions: {
    // async [FETCH_ARTWORKS]() {
    //   const runtimeConfig = useRuntimeConfig();
    //   const baseUrl = runtimeConfig.public.apiBase;
    //   const endpoint = '/artworks';
    //   const url = `${baseUrl}${endpoint}`;
    //   const response = await axios.get<Artwork[]>(url);
    //   console.log(response.data.data.artworks);
    //   return response.data.data.artworks;
    async [FETCH_ARTWORKS]() {
      const { $axiosApi } = useNuxtApp();
      const artworks = await $axiosApi.art.getArtworks();
      this.artworks = artworks;
    },
  },
  getters: {
    [UNIQUE_ARTWORK_CATEGORIES](state) {
      return createSetFromNestedArray(state.artworks, 'categories');
    },
    [UNIQUE_ARTWORK_LOCATIONS](state) {
      return createSetFromNestedArray(state.artworks, 'location');
    },
    [INCLUDE_ARTWORK_BY_CATEGORY]: () => (artwork: IArtwork) => {
      const filtersStore = useFiltersStore();
      if (filtersStore.selectedArtworkCategories.length === 0) return true;
      return artwork.categories.some((cat) =>
        filtersStore.selectedArtworkCategories.includes(cat)
      );
    },
    [INCLUDE_ARTWORK_BY_LOCATION]: () => (artwork: IArtwork) => {
      const filtersStore = useFiltersStore();
      if (filtersStore.selectedArtworkLocations.length === 0) return true;
      return artwork.location.some((loc: string) =>
        filtersStore.selectedArtworkLocations.includes(loc)
      );
    },
    [ARTWORK_SPOTLIGHTS](state) {
      return state.artworks.filter(
        (artwork) => artwork.spotlight && artwork.spotlight === true
      );
    },
    [ARTWORK_HERO](state) {
      return state.artworks.filter(
        (artwork: IArtwork) => artwork.hero && artwork.hero === true
      );
    },
    [INCLUDE_ARTWORK_BY_TAG]: () => (artwork: IArtwork) => {
      const filtersStore = useFiltersStore();
      if (filtersStore.tagsSearchTerm.length === 0) return true;
      return artwork.tags.some((tag: string) =>
        filtersStore.tagsSearchTerm.toLowerCase().includes(tag.toLowerCase())
      );
    },
    // [SORT_ARTWORKS_BY_DATE_ASCENDING](state) {},
    [FILTERED_ARTWORKS](state): IArtwork[] {
      return state.artworks
        .filter((artwork) => this.INCLUDE_ARTWORK_BY_CATEGORY(artwork))
        .filter((artwork) => this.INCLUDE_ARTWORK_BY_LOCATION(artwork))
        .filter((artwork) => this.INCLUDE_ARTWORK_BY_TAG(artwork));
    },
  },
});
