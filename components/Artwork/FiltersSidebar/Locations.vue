<script lang="ts" setup>
import { computed } from "vue";
import { ArtworkFiltersSidebarCheckboxGroup } from ".";

import { useArtworksStore } from "@/stores";
import { useUserMovementsStore } from "@/stores";

const artworksStore = useArtworksStore();

const UNIQUE_ARTWORK_LOCATIONS = computed(
	() => artworksStore.UNIQUE_ARTWORK_LOCATIONS
);

const userMovementsStore = useUserMovementsStore();
</script>

<template>
	<artwork-filters-sidebar-checkbox-group
		class="capitalize"
		:unique-values="UNIQUE_ARTWORK_LOCATIONS"
		:action="userMovementsStore.ADD_SELECTED_ARTWORK_LOCATIONS"
	/>
</template>
