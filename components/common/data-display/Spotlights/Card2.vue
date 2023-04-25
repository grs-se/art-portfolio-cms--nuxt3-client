<template>
  <figure class="spotlight-card">
    <NuxtLink to="/gallery/observation">
      <nuxt-img
        provider="cloudinary"
        :src="slide.imageUrl"
        alt=""
        class="img"
      />
    </NuxtLink>
    <figcaption>
      <h3>
        {{ slide.title }}
      </h3>
      <p v-if="slide.description" class="description">
        {{ slide.description }}
      </p>
      <p class="medium">
        {{ slide.medium.join(', ') }}
      </p>
    </figcaption>
    <!-- <div class="u-spacing h-10"></div> -->
    <span class="px-6 pb-4 text-sm">
      Tag:
      <NuxtLink to="/gallery" class="tag-link">{{
        slide.categories[0]
      }}</NuxtLink></span
    >
  </figure>
</template>

<script lang="ts" setup>
defineProps(['slide', 'currentSlide', 'index']);
</script>
<!-- <slot
:image-cover="slide.imageUrl"
:title="slide.title"
:medium="slide.medium"
:dimensions="slide.dimensions"
:description="slide.description"
:categories="slide.categories"
></slot> -->

<style scoped lang="scss">
.spotlight-card {
  @apply flex h-auto flex-col rounded-lg border bg-white shadow-sm;

  figcaption {
    @apply mt-3 block h-44 max-w-sm px-6 py-4;

    h3 {
      @apply text-lg font-medium;
    }
  }

  .img {
    height: 16rem;
    align-content: flex-start;
    object-fit: contain;
    margin: auto;
  }

  h3 {
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .description {
    text-overflow: ellipsis;
    display: -webkit-box;
    word-wrap: break-word;
    overflow: hidden;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  .medium {
    @apply mt-3 text-sm;
  }

  .tag-link {
    @apply text-brand-blue-1 underline;
  }
}

// .line-clamp {
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 3;
//   overflow: hidden;
// }

// p {
//   word-break: break-all;
// }
</style>
