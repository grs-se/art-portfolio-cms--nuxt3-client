<script lang="ts" setup>
const links = ref([
  { text: 'Gallery', url: '/gallery' },
  { text: 'Research', url: '/research' },
  { text: 'Text', url: '/text' },
  { text: 'Exhibitions', url: '/exhibitions' },
  { text: 'Statement', url: '/text/artist-statement' },
  { text: 'About', url: '/about' },
  { text: 'Contact', url: '/contact' },
]);

const router = useRouter();
// const activeRoute = router.

import { useRoute } from 'vue-router';

const route = useRoute();
// const onGalleryPage = computed(() => route.name === 'gallery');

// let activeLink;

// const activeLink = (link) => {
//   console.log(route.name);
//   // if (link === route.name) link = activeLink;
// }
</script>

<template>
  <nav class="ml-12 h-full">
    <ul class="m-0 h-full list-none p-0 xs:hidden xl:flex">
      <li
        v-for="link in links"
        :key="link.text"
        data-test="main-nav-list-item"
        class="ml-9 h-full text-base first:ml-0"
      >
        <router-link :to="link.url" class="flex h-full items-center py-2" exact
          ><span>{{ link.text }}</span></router-link
        >
      </li>
      <!-- <li
        v-for="link in links"
        :key="link.text"
        data-test="main-nav-list-item"
        class="ml-9 h-full text-base first:ml-0"
        :class="
          route.name.includes(link.text.toLowerCase())
            ? 'border-b-2 border-gray-500'
            : ''
        "
      >
        <RouterLink :to="link.url" class="flex h-full items-center py-2">{{
          link.text
        }}</RouterLink>
      </li> -->
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.router-link-active {
  border-bottom-width: 3px;
  border-color: grey;
  span {
    transform: translateY(1.5px);
  }
}
.nav-link {
  height: 100%;
  font-size: 1rem /* 16px */;
  line-height: 1.5rem;
  margin-left: 2.25rem;
}
.nav-link:first-child {
  margin-left: 0px;
}
.active {
}
</style>
