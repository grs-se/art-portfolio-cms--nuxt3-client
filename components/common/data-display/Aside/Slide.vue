<template>
  <figure class="aside__figure">
    <!-- <carousel
          :slides="artwork"
          controls
          indicators="false"
          :interval="3000"
          :width="1000"
          :height="450"
        ></carousel> -->

    <!-- <ClientOnly> -->
    <NuxtLink
      :to="artworkLightboxLink"
      class="group flex items-center justify-center"
    >
      <!-- BUG CloudImage not refreshing image -->
      <!-- <CloudImage> -->
      <nuxt-img
        :src="currentSlide.imageUrl"
        class="group:hover aside__image hover:box-border hover:border-2 hover:border-brand-blue-2"
        @click=""
        alt=""
        provider="cloudinary"
      />
    </NuxtLink>
  </figure>
</template>

<script lang="ts" setup>
defineProps({
  currentSlide: Object,
});
</script>
