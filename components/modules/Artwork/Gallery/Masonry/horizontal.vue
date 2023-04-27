<template>
  <figure
    class="flex flex-col rounded border border-solid border-brand-gray-2 hover:shadow-gray"
  >
    <nuxt-img
      :src="artwork.imageUrl"
      class="artworks-center justify-center sm:max-h-60 xl:max-h-80"
    />
    <figcaption class="bg-white">
      <h3>{{ artwork.title }}</h3>
      <span>{{ artwork.medium }}</span>
      <span>{{ artwork.year }}</span>
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
import useAppConfigStore from '~~/store/modules/app-config';
const appConfig = useAppConfigStore();
const props = defineProps({
  artwork: {
    type: Object,
    required: true,
  },
});

// const galleryMode = computed(() => {
//   return appConfig.galleryMode;
// });

// const galleryMode = computed(() => {
//   if (appConfig.galleryMode === galleryMode.MASONRY)
//     return {
//       flexWidth: (props.artwork.width * 220) / props.artwork.height,
//       flexHeight: (props.artwork.height / props.artwork.width) * 100,
//     };
// });
</script>
