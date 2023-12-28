import { apiClient } from '@lib/network';

const AUTH_API_PATH = '/auth';

const REGISTER_ENDPOINT = '/register';
const LOGIN_ENDPOINT = '/login';
const LOGOUT_ENDPOINT = '/logout';

export async function login({ email, password }) {
  const res = await apiClient.post(`${AUTH_API_PATH}/${LOGIN_ENDPOINT}`, { email, password });

  return res.data;
}

export async function signup(data) {
  const res = await apiClient.post(`${AUTH_API_PATH}/${REGISTER_ENDPOINT}`, data);

  return res.data;
}

export async function logout() {
  const res = await apiClient.post(`${AUTH_API_PATH}/${LOGOUT_ENDPOINT}`);

  return res.data;
}
