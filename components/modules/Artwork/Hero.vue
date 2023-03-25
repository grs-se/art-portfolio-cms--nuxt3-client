<script lang="ts" setup>
import { useArtworksStore } from '@/stores';
const artworksStore = useArtworksStore();

const ARTWORK_HERO = computed(() => artworksStore.ARTWORK_HERO);
</script>

<template>
	<HeroLayout>
		<HeroHeadline />
		<ArtworkSearchForm />
		<template #hero-image>
			<HeroImage :hero-images="ARTWORK_HERO" />
		</template>
	</HeroLayout>
</template>
