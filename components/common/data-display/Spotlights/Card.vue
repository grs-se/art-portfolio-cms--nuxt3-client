<template>
  <figure
    class="spotlight-card h-auto rounded-lg border bg-white shadow-sm px-6 pb-8"
  >
    <CloudImage
      :src="slide.imageUrl"
      class="h-64 content-start object-contain mx-auto hover:opacity-95 hover:cursor-pointer"
      alt=""
      @click=""
    />
    <figcaption class="mt-3 h-max pt-3 max-w-sm">
      <dl>
        <h4
          class="text-lg font-medium text-ellipsis whitespace-normal tracking-tight leading-tight"
        >
          {{ slide.title }}
        </h4>
        <div>
          <dd
            v-if="slide.description"
            class="mt-3 text-sm text-ellipsis overflow-clip whitespace-normal line-clamp"
          >
            {{ slide.description }}
          </dd>
          <span v-if="slide.description" class="underline">Read more</span>
        </div>
        <dd class="mt-3 text-sm">
          {{ slide.medium[1].toString() }}
        </dd>
      </dl>
      <span class="text-sm">
        Tag:
        <NuxtLink
          :to="'/gallery/' + slide.categories[0]"
          class="text-brand-blue-1 underline"
          >{{ slide.categories[0] }}</NuxtLink
        ></span
      >
    </figcaption>
    <!-- <div class="u-spacing h-10"></div> -->
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
figcaption {
  min-width: 16rem;
}
.line-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
</style>
