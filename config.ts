export default {
  // Legacy API
  APIv1: process.env.APP_API_V1 || 'https://fdapilive.ilovefreegle.org/api',

  // New API
  APIv2: process.env.APP_API_V2 || 'https://api.ilovefreegle.org:8192/apiv2',

  // This is where the user site is.
  USER_SITE: 'https://www.ilovefreegle.org',
};
