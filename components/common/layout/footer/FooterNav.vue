<script lang="ts" setup>
const footerMenuGroups = ref([
  {
    header: 'Contact',
    url: '/',
    listItems: [
      {
        item: 'Please feel free to contact with enquiries:',
        url: '/gallery',
      },
    ],
  },
  // {
  //   header: 'Services',
  //   url: '/',
  //   listItems: [
  //     { item: 'Art Teaching', url: '/gallery', link: true },
  //     { item: 'Art Technical', url: '/gallery', link: true },
  //     { item: 'Web-Development', url: '/gallery', link: true },
  //     { item: 'Landscape Construction', url: '/gallery', link: true },
  //   ],
  // },
  // {
  //   header: 'Products',
  //   url: '/',
  //   listItems: [
  //     { item: 'Drawings', url: '/gallery' },
  //     { item: 'Objects', url: '/gallery' },
  //     { item: 'Painting', url: '/gallery' },
  //     { item: 'Print', url: '/gallery' },
  //   ],
  // },
]);
</script>

<template>
  <section class="w-full bg-brand-gray-3 text-white z-30">
    <div class="mx-auto py-16 text-start sm:w-3/4 xl:w-1/2">
      <div class="footer-row-group">
        <div
          class="mx-auto grid grid-cols-12 border-b border-solid border-b-brand-gray-1"
        >
          <div
            v-for="menuGroup in footerMenuGroups"
            :key="menuGroup.header"
            class="col-span-4 mr-8"
          >
            <div class="pb-6">
              <NuxtLink
                :to="menuGroup.url"
                class="text-xl hover:text-brand-blue-2"
                >{{ menuGroup.header }}
              </NuxtLink>
            </div>
            <div class="pb-10 text-sm">
              <NuxtLink
                v-for="listItem in menuGroup.listItems"
                :key="listItem.item"
                :to="listItem.url"
                class="flex py-1 hover:text-brand-blue-2"
                >{{ listItem.item }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-row-group">
        <div class="flex justify-between pt-10 text-xs">
          <div class="mr-8">
            <p>All content copyright George Rice-Smith, 2023</p>
          </div>
          <div class="">
            <p>Website built and designed by GRS Art Web-Design</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
