<script lang="ts" setup>
import { useFiltersStore } from '~/store/modules/filters';
import { useTextsStore } from '~/store/modules/text';

const textStore = useTextsStore();
const UNIQUE_TEXT_CATEGORIES = computed(() => textStore.UNIQUE_TEXT_CATEGORIES);

const route = useRoute();
const filtersStore = useFiltersStore();

const parseTagsSearchTerm = () => {
  const tag = (route.query.tag as string) || '';
  filtersStore.UPDATE_TAGS_SEARCH_TERM(tag);
};

onMounted(parseTagsSearchTerm);
</script>

<template>
  <filters-sidebar-layout>
    <!-- <filters-sidebar-checkbox-group/> -->
    <filters-sidebar-prompt
      prompt="Text Options"
      @clear-filters="filtersStore.CLEAR_USER_TEXT_FILTER_SELECTIONS"
    />

    <filters-sidebar-tags tags-placeholder="Essay, journal, poetry" />

    <collapsible-accordian header="Categories">
      <filters-sidebar-checkbox-group
        class="capitalize"
        :unique-values="UNIQUE_TEXT_CATEGORIES"
        :action="filtersStore.ADD_SELECTED_TEXT_CATEGORIES"
      />
      <!-- <filters-sidebar-categories /> -->
    </collapsible-accordian>
  </filters-sidebar-layout>
</template>
