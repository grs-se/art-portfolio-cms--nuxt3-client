<script lang="ts" setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
  },
})
</script>

<template>
  <ActionButton type="submit" class="primary w-1/3">
    <span v-if="show"
      ><font-awesome-icon :icon="['fas', 'user']" class="mr-3" />Sign in</span
    >
    <Spinner v-else class="text-center"></Spinner>
  </ActionButton>
</template>
