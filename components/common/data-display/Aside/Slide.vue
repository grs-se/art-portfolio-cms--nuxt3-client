<template>
  <figure class="aside-figure">
    <nuxt-link>
      <nuxt-img
        :src="currentSlide.imageUrl"
        class="aside-image"
        @click=""
        alt=""
        provider="cloudinary"
      />
    </nuxt-link>
  </figure>
</template>

<script lang="ts" setup>
const route = useRoute();
const props = defineProps({
  currentSlide: Object,
});

// const lightboxLink = computed(() => `gallery/item/${props.currentSlide.id}`);
</script>

<style scoped lang="scss">
.aside-figure {
  // margin: 0.5rem;
  margin: 0 1.5rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: grey;
  }

  &-image {
    @apply hover:box-border hover:border-2 hover:border-brand-blue-2;
    max-height: 62vh;
    width: auto;
    object-fit: contain;
  }
}
</style>
