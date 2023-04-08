// export default defineNuxtRouteMiddleware((to, from) => {
//   if (to.path !== from.path && process.client) {
//     window.scrollTo(0, 0);
//   }
// });

export default defineNuxtRouteMiddleware((to, from) => {
  useNuxtApp().hook('page:finish', () => {
    if (history.state.scroll) {
      setTimeout(() => window.scrollTo(history.state.scroll), 0);
    } else {
      setTimeout(() => window.scrollTo(0, 0), 0);
    }
  });
});
