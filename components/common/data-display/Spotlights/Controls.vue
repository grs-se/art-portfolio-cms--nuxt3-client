<template>
  <div class="h-32">
    <div class="flex justify-between px-40">
      <action-button
        text="<"
        btn="slide-show"
        class="spotlights-carousel-controls right-4"
        @click="$emit('prev')"
      />
      <action-button
        text=">"
        btn="slide-show"
        class="spotlights-carousel-controls left-4"
        @click="$emit('next')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['prev', 'next']);
</script>
