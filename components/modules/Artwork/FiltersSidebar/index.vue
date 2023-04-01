<script lang="ts" setup>
import { useFiltersStore } from '~/stores/filters';
import { useArtworksStore } from '~/stores/artwork';
import { useSearchStore } from '~/stores/search';

const artworksStore = useArtworksStore();
const UNIQUE_ARTWORK_CATEGORIES = computed(
  () => artworksStore.UNIQUE_ARTWORK_CATEGORIES
);
const UNIQUE_ARTWORK_LOCATIONS = computed(
  () => artworksStore.UNIQUE_ARTWORK_LOCATIONS
);

const route = useRoute();
const filtersStore = useFiltersStore();

const parseTagsSearchTerm = () => {
  const tag = (route.query.tag as string) || '';
  filtersStore.UPDATE_TAGS_SEARCH_TERM(tag);
};

onMounted(parseTagsSearchTerm);

const searchStore = useSearchStore();
</script>

<template>
  <div v-show="searchStore.state.searchModal">
    <filters-sidebar-layout>
      <!-- <filters-sidebar-checkbox-group/> -->
      <filters-sidebar-prompt
        prompt="Gallery Options"
        @clear-filters="filtersStore.CLEAR_USER_ARTWORK_FILTER_SELECTIONS"
      />
      <filters-sidebar-tags
        tagsPlaceholder="Landscape, Archetype, Sleeping, figure"
      />
      <collapsible-accordian header="Sort by">
        <filters-sidebar-checkbox-group
          class="capitalize"
          :unique-values="UNIQUE_ARTWORK_CATEGORIES"
          :action="filtersStore.ADD_SELECTED_ARTWORK_CATEGORIES"
        />
        <!-- <filters-sidebar-categories /> -->
      </collapsible-accordian>
      <collapsible-accordian header="Categories">
        <filters-sidebar-checkbox-group
          class="capitalize"
          :unique-values="UNIQUE_ARTWORK_CATEGORIES"
          :action="filtersStore.ADD_SELECTED_ARTWORK_CATEGORIES"
        />
        <!-- <filters-sidebar-categories /> -->
      </collapsible-accordian>
      <collapsible-accordian header="Locations">
        <filters-sidebar-checkbox-group
          class="capitalize"
          :unique-values="UNIQUE_ARTWORK_LOCATIONS"
          :action="filtersStore.ADD_SELECTED_ARTWORK_LOCATIONS"
        />
        <!-- <filters-sidebar-locations /> -->
      </collapsible-accordian>
    </filters-sidebar-layout>
  </div>
</template>
