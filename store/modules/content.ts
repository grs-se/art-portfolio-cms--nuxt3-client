import { defineStore } from 'pinia';

const useContentStore = defineStore('content', () => {
  const state = reactive({
    siteProperties: {
      sitename: 'George Rice-Smith',
      telephone: '023423402340234',
    },
    pageContent: {},
  });

  const setPageContent = (state, pageContent) => {
    state.pageContent = pageContent;
  };

  const getPageContent = (state) => {
    return state.pageContent;
  };
  return { state, setPageContent, getPageContent };
});

export default useContentStore;
