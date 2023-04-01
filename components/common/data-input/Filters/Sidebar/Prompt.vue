<script lang="ts" setup>
defineProps({
  prompt: {
    type: String,
    required: true,
  },
});
defineEmits(['clearFilters']);
</script>

<template>
  <div class="flex flex-row justify-between">
    <h3 class="my-4 text-base">{{ prompt }}</h3>
    <div class="flex items-center text-sm">
      <ActionButton
        text="Clear Filters"
        type="tertiary"
        @click="$emit('clearFilters')"
      />
    </div>
  </div>
</template>
