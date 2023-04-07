<script lang="ts" setup>
const siteTitle = ref('George Rice-Smith');
</script>

<template>
  <NuxtLink
    :to="'/'"
    class="flex h-full items-center text-xl xs:ml-4 md:ml-0"
    >{{ siteTitle }}</NuxtLink
  >
</template>

<style lang="scss" scoped>
.router-link-active {
  border-bottom-width: 3px;
  border-color: grey;
  span {
    transform: translateY(1.5px);
  }
}
</style>
