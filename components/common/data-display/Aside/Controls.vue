<template>
  <button @click="$emit('prev')" class="carousel-controls left">Prev</button>
  <button @click="$emit('next')" class="carousel-controls right">Next</button>
</template>

<script lang="ts" setup>
defineEmits(['prev', 'next']);
</script>
