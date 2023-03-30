import axios from 'axios';
import AuthModule from '~/api/modules/auth';
import ArtModule from '~/api/modules/artworks';
import TextModule from '~/api/modules/texts';

export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig();
  const defaultUrl = runtimeConfig.public.apiBase;

  const fetchOptions = {
    baseURL: defaultUrl,
    headers: {
      common: {},
    },
  };

  const apiFetcher = axios.create(fetchOptions);

  const modules = {
    auth: new AuthModule(apiFetcher),
    art: new ArtModule(apiFetcher),
    text: new TextModule(apiFetcher),
  };

  return {
    provide: {
      axiosApi: modules,
    },
  };
});
