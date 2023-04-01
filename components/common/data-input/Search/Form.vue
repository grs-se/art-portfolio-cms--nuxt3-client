<script lang="ts" setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  searchRoute: {
    type: String,
    required: true,
  },
  initialSearchPrompt: {
    type: String,
    required: true,
    default: '',
  },
  searchPrompts: {
    type: Array,
    required: true,
    // default: 'Painting',
  },
});

const tag = ref('');

const router = useRouter();

const searchForData = () => {
  router.push({
    name: props.searchRoute,
    query: { tag: tag.value },
  });
};

const searchPrompt = ref(props.initialSearchPrompt);
const interval = ref<ReturnType<typeof setInterval>>();

// const searchPromptClasses = computed(() => {
// 	return {
// 		[searchPrompt.value.toLowerCase()]: true,
// 	};
// });

const changeSearchPrompt = () => {
  interval.value = setInterval(() => {
    const searchPrompts = props.searchPrompts;
    searchPrompt.value = nextElementInList(searchPrompts, searchPrompt.value);
  }, 2200);
};
onMounted(changeSearchPrompt);

onBeforeUnmount(() => {
  clearInterval(interval.value);
});
</script>

<template>
  <form
    class="flex h-12 w-full items-center justify-center rounded-3xl border border-solid border-brand-gray-3"
    @submit.prevent="searchForData"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex h-full flex-1 flex-nowrap text-base font-light">
      <div class="relative flex h-full flex-1 items-center pr-3">
        <!-- <label for="tag" class="absolute left-0 -top-10">Portfolio:</label> -->
        <text-input id="tag" v-model="tag" :placeholder="searchPrompt" />
      </div>
    </div>

    <action-button
      text="Search"
      type="secondary"
      class="flex items-center rounded-r-3xl"
    />
  </form>
</template>
