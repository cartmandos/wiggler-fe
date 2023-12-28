import axios from 'axios';
import { handleUnauthorized, handleForbidden } from '@lib/routes/routeHandlers';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const API_PATH = import.meta.env.VITE_API_PATH;
const APP_API_URL = `${API_BASE_URL}/${API_PATH}`;

axios.defaults.baseURL = APP_API_URL;
axios.defaults.withCredentials = true;

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = axios.create();

// INTERCEPTORS

/**
 * Unauthorized (401) Request Interceptor
 * @description
 * Kill session on unauthorized/expired session and redirect to login
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      handleUnauthorized();
    }
    return Promise.reject(error);
  },
);

/**
 * Forbidden (403) Request Interceptor
 * @description
 * Redirect to forbidden page
 */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      handleForbidden();
    }
    return Promise.reject(error);
  },
);

export { apiClient };
