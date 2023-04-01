<template>
  <font-awesome-icon
    @click="handleBookmark"
    :icon="bookmark === true ? ['far', 'bookmark'] : ['fas', 'bookmark']"
    class="ml-4 mr-3"
    :class="`text-${props.color}`"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  color: {
    type: String,
    default: 'black',
  },
});

const bookmark = ref(false);

const handleBookmark = () => {
  bookmark.value = !bookmark.value;
};
</script>
