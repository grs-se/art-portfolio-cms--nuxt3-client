<template>
  <ol
    data-gallery-mode="grid-cards"
    class="grid-cards mx-auto grid bg-white sm:grid-cols-1 sm:gap-2 md:grid-cols-2 xl:grid-cols-3 xl:gap-4"
  >
    <slot></slot>
  </ol>
  <!-- <ol
    data-gallery-mode="grid-cards"
    class="grid-cards mx-auto grid rounded border border-solid bg-white p-1.5 sm:grid-cols-1 sm:gap-2 md:grid-cols-2 xl:grid-cols-3 xl:gap-4"
  >
    <slot></slot>
  </ol> -->
</template>

<script lang="ts" setup></script>

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
