<template>
  <NuxtLink
    to="/gallery"
    class="flex h-auto max-w-sm flex-col rounded-lg border bg-white shadow-sm"
  >
    <img
      :src="'images/' + slide.imageCover"
      class="h-64 content-start object-contain"
    />

    <div class="mt-3 h-48 px-6 py-4">
      <h3 class="text-lg font-medium">
        {{ slide.title }}
      </h3>
      <p class="line-clamp mt-3 text-sm">
        {{ slide.description }}
      </p>
      <p class="line-clamp mt-3 text-sm">
        {{ slide.medium }}
      </p>
    </div>

    <NuxtLink to="/gallery" class="px-6 pb-4 text-sm text-brand-blue-1"
      >More from {{ slide.categories[0] }}</NuxtLink
    >
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps(['slide', 'currentSlide', 'index', 'direction']);
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
</style>
