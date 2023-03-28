import { $fetch, FetchOptions } from 'ohmyfetch'
import { defineNuxtPlugin } from '#app'
import AuthModule from '~~/repository/modules/auth'
import ArtModule from '~~/repository/modules/artworks'

interface IApiInstance {
  auth: AuthModule,
  art: ArtModule
}

export default defineNuxtPlugin((nuxtApp) => {
  const fetchOptions: FetchOptions = {
    baseURL: nuxtApp.$config.API_BASE_URL,
  }

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions)

  /** object containing all repositories to expose */
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    art: new ArtModule(apiFetcher)
  }

  return {
    provide: {
      api: modules,
    },
  }
})
