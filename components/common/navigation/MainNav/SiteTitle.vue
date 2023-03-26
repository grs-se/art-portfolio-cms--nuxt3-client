<script lang="ts" setup>
const siteTitle = ref('George Rice-Smith')
</script>

<template>
  <NuxtLink
    :to="'/'"
    class="flex h-full items-center text-xl xs:ml-4 md:ml-0"
    >{{ siteTitle }}</NuxtLink
  >
</template>
