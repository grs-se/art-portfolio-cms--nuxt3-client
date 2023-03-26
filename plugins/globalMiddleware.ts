export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  addRouteMiddleware(
    'global',
    () => {
      console.log('')
    },
    { global: true }
  )
})
