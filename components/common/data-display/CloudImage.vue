<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    alt: string;
    src: string;
    lazy?: boolean | 'false' | 'true';
    width?: number;
  }>(),
  {
    lazy: true,
  }
);

const shiftLargeImgStyles = computed(() => {
  if (!props.width) return {};
  if (props.width <= 812) {
    return {
      width: `${props.width}px`,
    };
  }
  const transformX = `-${Math.round((props.width - 812) / 2)}px`;
  return {
    width: `${props.width}px`,
    '--tw-translate-x': transformX,
  };
});

const loadingType = computed(() => {
  return props.lazy === true || props.lazy === 'true' ? 'lazy' : 'eager';
});

//BUG provider not working: when provider used 2* src urls inputted
const provider = props.src.startsWith('https://') ? '' : 'cloudinary';

const $img = useImage();

const src = $img(
  props.src,
  {},
  {
    provider,
  }
);
</script>

<template>
  <div :style="shiftLargeImgStyles">
    <nuxt-img
      v-bind="$attrs"
      :alt="alt"
      :width="width"
      :src="src"
      :loading="loadingType"
    />
  </div>
</template>

<style scoped>
div {
  @apply mx-auto;
}
/* figure {
  @apply transform lg:!my-10 lg:max-w-900px mx-auto max-w-full;
}
@media (max-width: 1024px) {
  figure {
    @apply !translate-x-0;
  }
}
figure :deep(img:not([src$='.svg'])) {
  @apply w-auto rounded-lg shadow-lg max-h-70vh mx-auto;
} */
</style>
