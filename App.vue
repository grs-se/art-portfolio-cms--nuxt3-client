<script setup lang="ts">
// import { IUser } from "~/types/IUser";
// import { useUser } from "~/composables/useAuth";

const nuxtApp = useNuxtApp();

nuxtApp.hook('page:finish', () => {
  window.scrollTo(0, 0);
});

// await useUser()
</script>
<template>
  <Html dir="ltr">
    <Head>
      <!-- <SchemaOrgPerson :name="siteMeta.name" /> -->
    </Head>
    <Body class="text-gray-800 dark:text-gray-100 antialiased min-h-screen">
      <NuxtLayout name="new-default">
        <NuxtPage />
      </NuxtLayout>
      <!-- <NuxtLayout name="main">
    <NuxtPage />
  </NuxtLayout> -->
    </Body>
  </Html>
</template>
