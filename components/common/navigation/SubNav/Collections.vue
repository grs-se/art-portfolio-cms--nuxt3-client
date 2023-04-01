<template>
    <font-awesome-icon
      @click="handleBookmark"
      v-if="bookmark === true"
      :icon="['far', 'bookmark']"
      class="ml-4 mr-3"
    />

    <font-awesome-icon
      v-else
      @click="handleBookmark"
      :icon="['fas', 'bookmark']"
      class="ml-4 mr-3"
    />

</template>

<script lang="ts" setup>
// const props = defineProps({
//   bookmark: {
//     type: Boolean,
//     default: false,
//   },
// });

const bookmark = ref(false);

const handleBookmark = computed(() => {
  bookmark.value = !bookmark.value;
});
</script>
