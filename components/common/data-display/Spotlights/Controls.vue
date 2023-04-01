<template>
  <div class="h-32">
    <div class="flex justify-between px-40">
      <action-button
        text="<"
        type="slide-show"
        class="spotlights-carousel-controls right-4 shadow-md"
        @click="$emit('prev')"
      />
      <action-button
        text=">"
        type="slide-show"
        class="spotlights-carousel-controls left-4 shadow-md"
        @click="$emit('next')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['prev', 'next']);
</script>
<style scoped>
.spotlights-carousel-controls {
  font-weight: 700;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.5);
}
</style>
