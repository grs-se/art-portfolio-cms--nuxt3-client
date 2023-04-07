import { $fetch, FetchOptions } from 'ohmyfetch';

import AuthModule from '~/api/modules/auth';
import ArtModule from '~/api/modules/artworks';

interface IApiInstance {
  auth: AuthModule;
  art: ArtModule;
}

// const BASE_URL = URLS.;

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  const defaultUrl = runtimeConfig.public.apiBase;

  const fetchOptions: FetchOptions = {
    baseURL: defaultUrl,
  };

  /** create a new instance of $fetcher with custom option */
  const apiFetcher = $fetch.create(fetchOptions);
  // console.log('apiFetcher', apiFetcher);

  /** object containing all repositories to expose */
  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
    art: new ArtModule(apiFetcher),
  };

  return {
    provide: {
      fetchApi: modules,
    },
  };
});
