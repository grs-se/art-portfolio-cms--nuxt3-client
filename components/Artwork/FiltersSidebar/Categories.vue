<script lang="ts" setup>
import { computed } from "vue";
import { ArtworkFiltersSidebarCheckboxGroup } from ".";

import { useArtworksStore } from "@/stores";
import { useUserMovementsStore } from "@/stores";

const artworksStore = useArtworksStore();
const UNIQUE_ARTWORK_CATEGORIES = computed(
	() => artworksStore.UNIQUE_ARTWORK_CATEGORIES
);

const userMovementsStore = useUserMovementsStore();
</script>

<template>
	<artwork-filters-sidebar-checkbox-group
		class="capitalize"
		:unique-values="UNIQUE_ARTWORK_CATEGORIES"
		:action="userMovementsStore.ADD_SELECTED_ARTWORK_CATEGORIES"
	/>
</template>
