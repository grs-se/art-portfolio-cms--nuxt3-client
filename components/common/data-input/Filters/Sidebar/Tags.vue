<script lang="ts" setup>
import { useFiltersStore } from '~/store/modules/filters';

defineProps({
  tagsPlaceholder: {
    type: String,
    required: true,
  },
});

const userStore = useFiltersStore();

const tagsSearchTerm = computed({
  get() {
    return userStore.tagsSearchTerm;
  },
  set(value: string) {
    userStore.UPDATE_TAGS_SEARCH_TERM(value);
  },
});
</script>

<template>
  <div class="mt-2">
    <input
      v-model.lazy.trim="tagsSearchTerm"
      type="text"
      class="h-12 w-full rounded border border-solid border-brand-gray-1 p-3 text-base shadow-gray"
      :placeholder="tagsPlaceholder"
    />
  </div>
</template>
