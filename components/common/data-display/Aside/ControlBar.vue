<template>
  <div class="flex h-12 items-center justify-end justify-between px-4">
    <div class="flex gap-6">
      <button
        @click="$emit('prev')"
        class="carousel-controls left px-2 text-white"
      >
        <font-awesome-icon :icon="['fas', 'angle-left']" />
      </button>
      <button
        @click="$emit('next')"
        class="carousel-controls right px-2 text-white"
      >
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </button>
    </div>
    <button
      @click="$emit('next')"
      class="carousel-controls close px-2 text-white"
    >
      <font-awesome-icon :icon="['fas', 'xmark']" />
    </button>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['prev', 'next']);
</script>

<style scoped lang="scss">
.carousel-controls {
}

.close {
  justify-content: end;
}
</style>
