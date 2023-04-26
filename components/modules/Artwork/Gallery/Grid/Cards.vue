<template>
  <!-- <div class="mx-auto w-auto flex items-center justify-center"> -->
  <figure
    @mouseenter="$emit('mouseenter')"
    @mouseout="$emit('mouseout')"
    @click="$emit('open-aside'), $emit('switch', index)"
    :class="{ active: active === index }"
  >
    <CloudImage
      :src="file.imageUrl"
      class="w-auto items-center justify-center md:max-h-64 xl:max-h-80"
      :alt="file.title"
    />
    <figcaption class="line-clamp-1">
      {{ file.title }}
    </figcaption>
  </figure>
  <!-- </div> -->
</template>

<script lang="ts" setup>
const hover = ref<boolean>(false);

const props = defineProps({
  file: {
    type: Object,
    required: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  index: {
    type: Number,
  },
});

defineEmits(['mouseenter', 'mouseout', 'open-aside', 'switch']);
// var tooltip = document.getElementById("tooltip-span");

// const displayModalMousePosition = () => {
// 	window.onmousemove = function (e) {
// 		var x = e.clientX,
// 			y = e.clientY;
// 		tooltip.style.top = y + 20 + "px";
// 		tooltip.style.left = x + 20 + "px";
// 	};
// };

const artworkPageLink = computed(() => `/artworks/results/${props.file.id}`);
</script>

<style scoped lang="scss">
figure {
  @apply flex flex-col rounded border border-solid border-brand-gray-2 bg-white p-1 hover:shadow-gray max-w-fit m-auto justify-center;
}

figcaption {
  max-width: 90%;
  text-overflow: ellipsis;
  // // white-space: nowrap;
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;

  &:hover {
    // overflow: visible;
    // white-space: pre-wrap;
    // max-width: 90%;
  }
}

.active-card {
  border: 1px solid black;
}
</style>
