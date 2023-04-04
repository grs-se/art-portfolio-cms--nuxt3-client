<template>
  <ContentDoc path="/main-page" />
  <!-- <nuxt-content :document="contentStore.getPageContent" /> -->
</template>

<script>
import useContentStore from '~~/stores/content';
const contentStore = computed(() => useContentStore());
export default {};
</script>
