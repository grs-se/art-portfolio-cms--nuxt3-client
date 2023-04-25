<template>
  <figure class="aside__figure">
    <nuxt-img
      :src="currentSlide.imageUrl"
      class="group:hover aside__image hover:box-border hover:border-2 hover:border-brand-blue-2"
      @click=""
      alt=""
      provider="cloudinary"
    />
  </figure>
</template>

<script lang="ts" setup>
defineProps({
  currentSlide: Object,
});
</script>
