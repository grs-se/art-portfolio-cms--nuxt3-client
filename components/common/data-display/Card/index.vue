<template>
  <figure
    @mouseenter="$emit('mouseenter')"
    @mouseout="$emit('mouseout')"
    @click="$emit('open-aside'), $emit('switch', index)"
    :class="{ active: active === index }"
  >
    <CloudImage
      :src="data.imageUrl"
      class="w-auto items-center justify-center md:max-h-64 xl:max-h-80"
      :alt="data.title"
    />
    <figcaption class="line-clamp-1">
      <p>{{ index }}</p>
      <h3>{{ data.title }}</h3>
    </figcaption>
  </figure>
  <!-- <ModalHover v-if="cardHover" :data="data" /> -->
</template>

<script lang="ts" setup>
const hover = ref<boolean>(false);

const props = defineProps({
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

defineEmits(['mouseenter', 'mouseout', 'open-aside', 'switch']);
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
}

.active-card {
  border: 1px solid black;
}
</style>
