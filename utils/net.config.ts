const _header = {
  token: '',
  // contentType:
};

const networkConfig = {
  host: process.env.NUXT_PUBLIC_API_BASE,
  timeout: 10000,
  loading: false,
  header: _header,
};
