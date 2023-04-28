<template>
  <figure
    @mouseenter="$emit('mouseenter')"
    @mouseout="$emit('mouseout')"
    @click="$emit('open-aside', 'switch', 'card-clicked', index)"
    :class="{ active: active === index }"
  >
    <CloudImage
      :src="data.imageUrl"
      class="w-auto items-center justify-center md:max-h-64 xl:max-h-80"
      :alt="data.title"
    />
    <figcaption>
      <span class="line-clamp-1 flex">
        <!-- <div class="index">{{ index }}</div> -->
        <h3>{{ data.title }}</h3>
      </span>
    </figcaption>
  </figure>
  <!-- <ModalHover v-if="cardHover" :data="data" /> -->
</template>

<script lang="ts" setup>
const cardHover = ref(false);

defineProps({
  data: {
    type: Object,
    required: true,
  },
  active: {
    type: Number,
    default: 0,
  },
  index: {
    type: Number,
  },
});

defineEmits(['mouseenter', 'mouseout', 'open-aside', 'switch', 'card-clicked']);

// function showHoverModal(artwork: IArtwork) {
//   if (showAside) {
//     return;
//   } else {
//     // clickedCard.value = artwork;
//     cardHover.value = !cardHover.value;
//   }
// }
</script>

<style scoped lang="scss">
figure {
  @apply flex flex-col rounded border border-solid border-brand-gray-2 bg-white p-1 hover:shadow-gray max-w-fit m-auto justify-center hover:cursor-pointer;
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

  .index::after {
    content: '. ';
  }
}

.active {
  border: 1px solid black;
}
</style>
