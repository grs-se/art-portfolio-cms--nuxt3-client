<template>
  <figcaption class="aside-figcaption text-white">
    <h3 class="mb-1">
      Title: <span>"{{ artwork.title }}"</span>
    </h3>
    <div class="aside-details">
      <span>Medium: {{ artwork.medium[1] }}</span>
      <!-- <span>{{ date(artwork.date) }}</span> -->
      <span>Date: 2023</span>
      <span>Location: {{ artwork.location }}</span>

      <span class="aside-details__tags"
        >Tags: <a class="text-brand-blue-2" href="">{{ artwork.tags }}</a></span
      >
    </div>
  </figcaption>
</template>

<script lang="ts" setup>
defineProps({
  artwork: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.aside {
  &-details {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    line-height: 1.5rem;
    &__tags {
      margin-top: 1rem;
      font-size: 0.9rem;
      line-height: 1rem;
    }
  }
  &-figcaption {
    display: flex;
    width: 100%;
    flex-direction: column;
  }
}
</style>
