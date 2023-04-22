<template>
  <figure
    class="spotlight-card flex h-auto flex-col rounded-lg border bg-white shadow-sm"
  >
    <NuxtLink to="/gallery/observation" class="flex flex-col">
      <CloudImage
        :src="slide.imageCover"
        alt=""
        class="h-64 content-start object-contain"
      />
    </NuxtLink>
    <figcaption class="mt-3 block h-44 max-w-sm px-6 py-4">
      <h3 class="line-clamp text-lg font-medium">
        {{ slide.title }}
      </h3>
      <p v-if="slide.description" class="line-clamp mt-3 text-sm">
        {{ slide.description }}
      </p>
      <p class="line-clamp mt-3 text-sm">
        {{ slide.medium }}
      </p>
    </figcaption>
    <!-- <div class="u-spacing h-10"></div> -->
    <span class="px-6 pb-4 text-sm">
      Tag:
      <NuxtLink to="/gallery" class="text-brand-blue-1 underline">{{
        slide.categories[0]
      }}</NuxtLink></span
    >
  </figure>
</template>

<script lang="ts" setup>
defineProps(['slide', 'currentSlide', 'index']);
</script>
<!-- <slot
:image-cover="slide.imageCover"
:title="slide.title"
:medium="slide.medium"
:dimensions="slide.dimensions"
:description="slide.description"
:categories="slide.categories"
></slot> -->

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}

p {
  word-break: break-all;
}
</style>
