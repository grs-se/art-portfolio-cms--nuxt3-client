<template>
  <div class="aside shadow-gray">
    <AsideControlBar @close-aside="closeAside" />
    <figure class="aside__figure">
      <!-- <carousel
        :slides="artwork"
        controls
        indicators="false"
        :interval="3000"
        :width="1000"
        :height="450"
      ></carousel>
       -->
      <NuxtLink
        :to="artworkLightboxLink"
        class="group flex items-center justify-center"
      >
        <img
          :src="'images/' + artwork.imageCover"
          class="group:hover aside__image hover:box-border hover:border-2 hover:border-brand-blue-2"
          @click=""
        />
      </NuxtLink>
      <div class="aside__details-container">
        <AsideDetails :artwork="artwork" />
        <Bookmark color="white" class="justify-end" />
      </div>
    </figure>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';
// const route = useRoute();

import type { IArtwork } from '~/types';

const props = defineProps({
  artwork: {
    type: Object as PropType<IArtwork>,
    required: true,
  },
  artworks: {
    type: Object as PropType<IArtwork>,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
});

const closeAside = () => {};

const slides = ref();

// const date = (d) => {
//   const date = new Date(d);

//   const options = { year: 'numeric' };

//   date.toLocaleString('en-US', options);

//   return date;
// };

const artworkLightboxLink = computed(() => `/artworks/${props.artwork.slug}`);
// const currentArtworkSlug = computed(() => route.params.slug);
// var tooltip = document.getElementById("tooltip-span");

// const displayModalMousePosition = () => {
// 	window.onmousemove = function (e) {
// 		var x = e.clientX,
// 			y = e.clientY;
// 		tooltip.style.top = y + 20 + "px";
// 		tooltip.style.left = x + 20 + "px";
// 	};
// };
</script>

<style scoped lang="scss">
.aside {
  z-index: 10;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 82vh;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  &__figure {
    // margin: 0.5rem;
    margin: 0 1.5rem 1.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    &:hover {
      box-shadow: grey;
    }
  }

  &__image {
    max-height: 65vh;
    width: auto;
    object-fit: contain;
  }

  &__details-container {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
    padding: 0.25rem 1rem;
    gap: 2rem;
  }
}
</style>
