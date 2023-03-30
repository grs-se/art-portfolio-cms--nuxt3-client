<template>
  <div>Text Page for text {{ currentTextId }}</div>
</template>

<script lang="ts" setup>
const route = useRoute();
const currentTextId = computed(() => route.params.slug);
</script>
