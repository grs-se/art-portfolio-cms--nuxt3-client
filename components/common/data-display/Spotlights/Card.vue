<template>
  <NuxtLink
    to="/gallery"
    class="flex h-auto max-w-sm flex-col rounded-lg border bg-white"
  >
    <img
      :src="'images/' + spotlight.imageCover"
      class="h-64 content-start object-contain"
    />

    <div class="mt-3 h-48 px-6 py-4">
      <h3 class="text-lg font-medium">
        {{ spotlight.title }}
      </h3>
      <p class="line-clamp mt-3 text-sm">
        {{ spotlight.description }}
      </p>
      <p class="line-clamp mt-3 text-sm">
        {{ spotlight.medium }}
      </p>
    </div>

    <NuxtLink to="/gallery" class="px-6 pb-4 text-sm text-brand-blue-1"
      >More from {{ spotlight.categories[0] }}</NuxtLink
    >
  </NuxtLink>
</template>

<script lang="ts" setup>
defineProps({
  spotlight: {
    type: Object,
    required: true,
  },
});
</script>
<!-- <slot
:image-cover="spotlight.imageCover"
:title="spotlight.title"
:medium="spotlight.medium"
:dimensions="spotlight.dimensions"
:description="spotlight.description"
:categories="spotlight.categories"
></slot> -->

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
