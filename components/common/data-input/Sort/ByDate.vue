<template>
  <div class="">
    <p>Sort by {{ sortType }}</p>
    <font-awesome-icon :icon="['fas', 'caret-down']" />
  </div>
</template>
<script lang="ts" setup>
// const sortTypes = reactive(['Date', 'Relevance']);
const sortType = ref('Date');

const handleSortChange = () => {
  sortType.value === 'Date' ? 'Relevance' : 'Date';
};
</script>
