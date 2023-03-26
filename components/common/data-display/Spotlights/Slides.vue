<template>
  <ul class="flex w-max flex-row">
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <SpotLightsCard :spotlight="spotlight" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
defineProps({
  spotlights: {
    type: Object,
    required: true,
  },
})
</script>
