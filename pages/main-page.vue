<template>
  <ContentDoc path="/main-page" />
  <!-- <nuxt-content :document="contentStore.getPageContent" /> -->
</template>

<script>
import useContentStore from '~~/store/modules/content';
const contentStore = computed(() => useContentStore());
export default {};
</script>
