<template>
  <Card class="repeat">
    <template #default="{ imageUrl, title, medium, year }">
      <figure
        class="flex flex-col rounded border border-solid border-brand-gray-2 hover:shadow-gray"
      >
        <img
          :src="'public/images/artworks/' + imageUrl"
          class="items-center justify-center sm:max-h-60 xl:max-h-80"
        />
        <figcaption class="bg-white">
          <h3>{{ title }}</h3>
          <span>{{ medium }}</span>
          <span>{{ year }}</span>
        </figcaption>
      </figure>
    </template>
  </Card>
</template>

<script lang="ts" setup>
// props: {
// 	artwork: {
// 		type: Object,
// 		required: true,
// 	},
// },
// data() {
// return {
// 	flexWidth: (this.artwork.width.px * 220) / this.artwork.height.px,
// 	flexHeight: (this.artwork.height.px / this.artwork.width.px) * 100,
// 	imageUrl: "public/images/artworks/" + this.artwork.imageUrl,
// };
// },
</script>
