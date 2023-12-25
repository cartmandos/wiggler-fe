import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;
const API_PATH = import.meta.env.VITE_API_PATH;

const API_URL = `${API_BASE_URL}/${API_PATH}`;

axios.defaults.baseURL = API_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const apiClient = axios.create();

//TODO: implement axios interceptors
/* AXIOS INTERCEPTORS */

export { apiClient };
