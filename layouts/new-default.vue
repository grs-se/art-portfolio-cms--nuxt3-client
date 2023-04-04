<template>
  <MainNav />
  <slot />
  <FooterNav />
</template>

<script>
import useContentStore from '~~/stores/content';
const contentStore = useContentStore();
export default {
  data() {
    return {
      pageContent: {},
    };
  },
  watch: {
    $route() {
      this.RunNavigationActions();
    },
  },
  methods: {
    async RunNavigationActions() {
      let pageContent;
      try {
        pageContent = await this.$content(this.$route.name).fetch(
          contentStore.setPageContent(this.pageContent)
        );
      } catch (error) {}
    },
  },
  async fetch() {
    this.RunNavigationActions();
  },
  head(req) {
    const ret = {};
    ret.title = contentStore.getPageContent.title;
    ret.meta = [];
    if (contentStore.getPageContent.description !== undefined) {
      ret.meta.push({
        hid: 'description',
        name: 'description',
        content: contentStore.getPageContent.description,
      });
    }
    if (contentStore.getPageContent.keywords !== undefined) {
      ret.meta.push({
        hid: 'keywords',
        name: 'keywords',
        content: contentStore.getPageContent.keywords,
      });
    }
    return ret;
  },
};
</script>
