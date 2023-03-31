import { defineStore } from 'pinia';

export const useSearchStore = defineStore('search', () => {
  const state = reactive({
    tagsSearchTerm: '',
    searchModal: false,
    authMode: true,
  });

  const UPDATE_TAGS_SEARCH_TERM = (term: string) => {
    state.tagsSearchTerm = term;
  };

  const SET_DISPLAY_SEARCH_MODAL = () => {
    state.searchModal = !state.searchModal;
  };

  return {
    state,
    UPDATE_TAGS_SEARCH_TERM,
    SET_DISPLAY_SEARCH_MODAL,
  };
});
