<script lang="ts" setup>
import { useSettingsStore } from '~~/store/modules/settings';

const settingsStore = useSettingsStore();

defineEmits(['prev', 'next', 'close-aside']);

const closeAside = () => {
  settingsStore.showAside();
};
</script>

<template>
  <div class="flex h-12 items-center justify-between px-4">
    <div class="flex gap-6">
      <button
        @click="$emit('prev')"
        class="carousel-controls left px-2 text-black"
      >
        <font-awesome-icon :icon="['fas', 'angle-left']" />
      </button>
      <button
        @click="$emit('next')"
        class="carousel-controls right px-2 text-black"
      >
        <font-awesome-icon :icon="['fas', 'angle-right']" />
      </button>
    </div>
    <button @click="closeAside" class="carousel-controls close px-2 text-black">
      <font-awesome-icon :icon="['fas', 'xmark']" />
    </button>
  </div>
</template>

<style scoped lang="scss">
.carousel-controls {
}

.close {
  justify-content: end;
}
</style>
