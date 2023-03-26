<script lang="ts" setup>
defineProps({
  hero: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="col-span-5 col-start-7 self-center justify-self-center">
    <img class="object-contain" :src="'images/' + hero.url" />
  </div>
</template>
