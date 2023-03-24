<script lang="ts" setup>
defineProps({
	heroImages: {
		type: Object,
		required: true,
	},
});
</script>
<template>
	<div
		v-for="hero in heroImages"
		:key="hero.id"
		class="col-span-5 col-start-7 self-center justify-self-center"
	>
		<img class="object-contain" :src="'images/' + hero.imageCover" />
	</div>
</template>
