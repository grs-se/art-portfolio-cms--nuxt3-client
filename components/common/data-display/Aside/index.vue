<template>
  <div class="aside">
    <figure class="aside__figure">
      <img :src="'images/' + artwork.imageCover" class="aside__image" />
      <figcaption class="flex flex-col text-white">
        <h3>{{ artwork.title }}</h3>
        <div class="flex flex-col text-base">
          <span>{{ artwork.medium }}</span>
          <span>{{ artwork.date.toLocaleString() }}</span>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script lang="ts" setup>
import { type PropType } from 'vue';

import type { IArtwork } from '~/types/models/IArtwork';

defineProps({
  artwork: {
    type: Object as PropType<IArtwork>,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
});
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
    display: flex;
    flex-direction: column;
    &:hover {
      box-shadow: grey;
    }
  }

  &__image {
    max-height: 75vh;
    width: auto;
    object-fit: contain;
  }
}
</style>
