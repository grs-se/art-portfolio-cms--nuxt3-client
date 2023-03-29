<script lang="ts" setup>
const props = defineProps({
  headline: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
});
// const props = defineProps({
//   action: {
//     type: String,
//     required: false,
//   },
//   actions: {
//     type: Array,
//     required: false,
//   },
// })

// const action = ref(props.action)

// const interval = ref<ReturnType<typeof setInterval>>()

// const actionClasses = computed(() => {
//   return {
//     [action.value.toLowerCase()]: true,
//   }
// })

// const changeTitle = () => {
//   interval.value = setInterval(() => {
//     action.value = nextElementInList(props.actions, props.action)
//   }, 3000)
// }
// onMounted(changeTitle)
// onBeforeUnmount(() => {
//   clearInterval(interval.value)
// })
</script>

<template>
  <section class="mb-24">
    <h1 class="hero-header mb-10 font-normal">
      <span>{{ props.headline }}</span>
      <br />
      <!-- <span :class="actionClasses">{{ action }}</span> -->
    </h1>
    <h2 class="text-3xl font-light">{{ props.subHeading }}</h2>
  </section>
</template>

<style scoped>
.hero-header {
  font-size: 2.8rem;
}
.artist {
  color: #1a73e8;
}

.web-developer {
  color: #34a853;
}

.landscaping {
  color: #f9ab00;
}

.build {
  color: #d93025;
}
</style>
