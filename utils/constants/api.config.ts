import 
/**
 * @file Api config
 * @module config.api
 */

export const BASE_URL_API = process.env.API_BASE_URL;

export const URLS = {
  AUTH: {
    LOGIN: '/login/',
    REGISTER: '/register/',
    LOGOUT: '/logout/',
  },
  ADMIN: {
    USER: {
      GET_USERS: '/admin/users/',
    },
  },
  ARTWORKS: {
    GET_ALL_ARTWORKS: '/artworks/',
    CREATE_ARTWORK: '/artworks/createUpload',
    CREATE_UPLOAD_ARTWORK: '/artworks/createUpload',
  },
};
