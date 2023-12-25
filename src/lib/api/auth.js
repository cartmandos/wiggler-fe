import { apiClient } from '@lib/network';

const AUTH_API_PATH = '/auth';

export async function login({ email, password }) {
  const res = await apiClient.post(`${AUTH_API_PATH}/login`, { email, password });

  return res.data;
}

export async function signup(data) {
  const res = await apiClient.post(`${AUTH_API_PATH}/signup`, data);

  return res.data;
}

export async function logout() {
  const res = await apiClient.post(`${AUTH_API_PATH}/logout`);

  return res.data;
}
