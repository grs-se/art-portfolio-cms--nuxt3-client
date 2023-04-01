<script lang="ts" setup>
import { useSearchStore } from '~/stores/search';
const searchStore = useSearchStore();

// const SET_DISPLAY_SEARCH_MODAL = computed(() => {
//   searchStore.SET_DISPLAY_SEARCH_MODAL();
// });
// const searchMenu = ref(false);
// const openSearchMenu = () => {};

// const toggleSearchMenu = () => {
//   searchMenu.value = !searchMenu.value;
//   if (searchMenu.value === true) {
//     openSearchMenu();
//   }
// };
</script>

<template>
  <font-awesome-icon
    :icon="['fas', 'search']"
    class="mr-3"
    @click="searchStore.SET_DISPLAY_SEARCH_MODAL"
  />
</template>
