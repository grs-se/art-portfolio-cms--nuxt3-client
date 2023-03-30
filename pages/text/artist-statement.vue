<template>
  <header-container>
    <template #title>
      <h1 class="w-full text-4xl font-normal">
        {{ artistStatement.title }}
      </h1>
    </template>
    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light">2022-2023</h2>
    </template>
  </header-container>
  <div id="artist-statement-wrapper" class="h-full w-full bg-brand-gray-2">
    <div class="h-10"></div>
    <section class="mx-auto flex w-1/2 flex-nowrap rounded-md border bg-white">
      <div class="mx-auto px-12 py-10">
        <p>{{ artistStatement.content }}</p>
      </div>
    </section>
    <div class="h-10"></div>
  </div>
</template>

<script lang="ts" setup>
import { ITextResponse } from '~/types';
const { $axiosApi } = useNuxtApp();

const artistStatement = ref<ITextResponse>({});

const getArtistStatement = async () => {
  const response = await $axiosApi.text.getArtistStatement<ITextResponse>();
  artistStatement.value = response;
};

onMounted(getArtistStatement);
</script>
