<template>
  <div
    id="tooltip"
    class="w-100 absolute z-50 flex h-auto flex-col rounded-lg bg-black"
  >
    <figure class="w-100 m-2 flex flex-col hover:shadow-gray">
      <!-- <img
        :src="'images/' + artwork.imageUrl"
        class="items-center justify-center sm:max-h-80 xl:max-h-80"
      /> -->
      <figcaption class="flex flex-col text-white">
        <h3>{{ data.title }}</h3>
        <div class="flex flex-col text-base">
          <span>{{ data.medium }}</span>
          <span>{{ data.date.toLocaleString() }}</span>
        </div>
      </figcaption>
    </figure>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  data: {
    type: Object,
    required: true,
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
