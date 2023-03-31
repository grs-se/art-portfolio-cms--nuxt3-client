<template>
  <div class="aside">
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
      <NuxtLink :to="artworkLightboxLink" class="text-brand-blue-1">
        <img
          :src="'images/' + artwork.imageCover"
          class="aside__image"
          @click=""
        />
      </NuxtLink>
      <AsideDetails :artwork="artwork" />
      <AsideControls />
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
  display: flex;
  flex-direction: column;
  background-color: black;

  &__figure {
    margin: 0.5rem;
    margin: 1.5rem;
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
}
</style>
