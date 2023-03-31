<template>
  <div
    class="mx-auto flex items-center justify-center p-2 md:max-h-64 xl:max-h-80 xl:w-auto"
  >
    <figure
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
      class="flex h-auto flex-col items-center justify-center rounded border border-solid border-brand-gray-2 bg-white p-1 hover:shadow-gray"
    >
      <img
        :src="'images/' + file.imageCover"
        class="sm:max-h-auto items-center justify-center md:max-h-64 xl:max-h-80"
      />
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
