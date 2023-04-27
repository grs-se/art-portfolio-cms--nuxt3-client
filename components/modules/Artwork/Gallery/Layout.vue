<template>
  <main
    class="gallery-wrapper"
    :class="[
      settingsStore.state.showAside === false
        ? 'mx-auto w-full'
        : 'absolute left-0 w-2/3',
    ]"
  >
    <ol
      data-gallery-mode="grid-cards"
      class="grid-cards mx-auto grid bg-white sm:grid-cols-1 sm:gap-2 md:grid-cols-2 xl:grid-cols-3 xl:gap-4"
    >
      <slot></slot>
    </ol>
    <slot name="pagination" />
  </main>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '~~/store/modules/settings';
const settingsStore = useSettingsStore();
</script>

<style scoped>
.gallery-wrapper {
  position: relative;
  /* margin: 0 auto; */
  background: white;
  padding: 1.5rem 1.5rem 2rem 1.5rem;
  overflow-y: scroll;
  height: 100vh;
}
</style>

<!-- <style scoped>
xl:max-w-gallery
</style> -->
<!-- <style scoped lang="scss">
.grid-cards {
  margin: 0 auto;
  display: grid;
  background: white;
  padding: 0.375rem;
  border: 1px solid grey;

  @media (min-width: 960px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style> -->
