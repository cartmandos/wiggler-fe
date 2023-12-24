import { apiClient } from '@lib/network';

const MY_ADOPTIONS_API_PATH = '/users/me/adoptions';

export async function getMyAdoptions() {
  const res = await apiClient.get(`${MY_ADOPTIONS_API_PATH}`);

  return res.data;
}
