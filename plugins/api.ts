import { $fetch, FetchOptions } from 'ohmyfetch';
import { defineNuxtPlugin } from '#app';

import AuthModule from '~/api/modules/auth';
import ArtModule from '~/api/modules/artworks';

interface IApiInstance {
  auth: AuthModule;
  art: ArtModule;
}

// const BASE_URL = URLS.;

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  console.log(`BASE URL: ${runtimeConfig.public.apiBase}`);
  const fetchOptions: FetchOptions = {
    baseURL: runtimeConfig.public.apiBase,
  };

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);

  /** object containing all repositories to expose */
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    art: new ArtModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
