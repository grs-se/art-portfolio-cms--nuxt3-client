<template>
  <div class="mx-auto flex items-center justify-center">
    <figure
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
      class="flex h-auto flex-col rounded border border-solid border-brand-gray-2 bg-white p-1 hover:shadow-gray"
    >
      <CloudImage
        :src="file.imageCover"
        class="sm:max-h-auto items-center justify-center md:max-h-64 xl:max-h-80"
        :alt="file.title"
      />
      <figcaption class="line-clamp-1 nowrap overflow-hidden">
        {{ file.title }}
      </figcaption>
    </figure>
  </div>
</template>

<script lang="ts" setup>
const hover = ref<boolean>(false);

const props = defineProps({
  file: {
    type: Object,
    required: true,
  },
});

defineEmits(['mouseenter', 'mouseout']);
// var tooltip = document.getElementById("tooltip-span");

// const displayModalMousePosition = () => {
// 	window.onmousemove = function (e) {
// 		var x = e.clientX,
// 			y = e.clientY;
// 		tooltip.style.top = y + 20 + "px";
// 		tooltip.style.left = x + 20 + "px";
// 	};
// };

const artworkPageLink = computed(() => `/artworks/results/${props.artwork.id}`);
</script>
