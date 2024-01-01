import { apiClient } from '@lib/network';

const USERS_API_PATH = '/users';

const PROFILE_ENDPOINT = 'profile';
const ADOPTIONS_ENDPOINT = 'adoptions';
const SAVED_PETS_ENDPOINT = 'saved-pets';

export async function getUsers() {
  const res = await apiClient.get(`${USERS_API_PATH}`);

  return res.data;
}

export async function getUser(id = 'me') {
  const res = await apiClient.get(`${USERS_API_PATH}/${id}`);

  return res.data;
}

export async function removeUser(id) {
  const res = await apiClient.delete(`${USERS_API_PATH}/${id}`);

  return res.data;
}

export async function updateUser(id, userData) {
  const res = await apiClient.put(`${USERS_API_PATH}/${id}`, userData);

  return res.data;
}

// PROFILE //

export async function getUserProfile(id = 'me') {
  const res = await apiClient.get(`${USERS_API_PATH}/${id}/${PROFILE_ENDPOINT}`);

  return res.data;
}

// ADOPTION //

export async function getUserAdoptions(id = 'me') {
  const res = await apiClient.get(`${USERS_API_PATH}/${id}/${ADOPTIONS_ENDPOINT}`);

  return res.data;
}

// SAVED PETS //

export async function getUserSavedPets(id = 'me') {
  const res = await apiClient.get(`${USERS_API_PATH}/${id}/${SAVED_PETS_ENDPOINT}`);

  return res.data;
}

export async function savePet(petId, id = 'me') {
  const res = await apiClient.post(`${USERS_API_PATH}/${id}/${SAVED_PETS_ENDPOINT}`, {
    petId,
  });

  return res.data;
}

export async function unSavePet(petId, id = 'me') {
  const res = await apiClient.delete(`${USERS_API_PATH}/${id}/${SAVED_PETS_ENDPOINT}/${petId}`);

  return res.data;
}
