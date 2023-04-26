<template>
  <div class="mx-auto mt-8">
    <div class="flex flex-row flex-nowrap">
      <p class="flex-grow text-sm">Page {{ currentPage }}</p>

      <div class="flex items-center justify-center">
        <NuxtLink
          v-if="previousPage"
          role="link"
          :to="{
            name: `${String(route.name)}`,
            query: { page: previousPage },
          }"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          >Previous</NuxtLink
        >

        <NuxtLink
          v-if="nextPage"
          role="link"
          :to="{
            name: `${String(route.name)}`,
            query: { page: nextPage },
          }"
          class="mx-3 text-sm font-semibold text-brand-blue-1"
          >Next</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  previousPage: {
    type: Number,
    required: true,
  },
  nextPage: {
    type: Number,
    required: true,
  },
});
</script>
