<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center justify-between px-8">
      <!-- v-if="onGalleryPage" -->

      <div class="flex flex-row items-center justify-center">
        <SubNavSearchToggler />
        <SubNavProductsCount />
        <div class="w-20"></div>
        <SubNavCategories />
      </div>

      <div class="">
        <SubNavSortBy />
      </div>

      <div class="flex flex-col">
        <SubNavCollections />
        <span>Collections</span>
      </div>
      <!-- <SubNavMenuItems /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router';

const route = useRoute();
// const onGalleryPage = computed(() => route.name === 'gallery');
</script>
