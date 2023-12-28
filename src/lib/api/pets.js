import { apiClient } from '@lib/network';

const PETS_API_PATH = '/pets';

const PHOTO_ENDPOINT = 'upload';
const ADOPTIONS_ENDPOINT = 'adoptions';

const RECENTLY_ADDED_ENDPOINT = 'recently-added';
const AVAILABLE_ENDPOINT = 'available';

export async function getPets() {
  const res = await apiClient.get(`${PETS_API_PATH}`);

  return res.data;
}

export async function getPet(petId) {
  const res = await apiClient.get(`${PETS_API_PATH}/${petId}`);

  return res.data;
}

export async function adPet(petData) {
  const res = await apiClient.post(`${PETS_API_PATH}`, petData);

  return res.data;
}

export async function removePet(petId) {
  const res = await apiClient.delete(`${PETS_API_PATH}/${petId}`);

  return res.data;
}

export async function updatePet(petId, petData) {
  const res = await apiClient.put(`${PETS_API_PATH}/${petId}`, petData);

  return res.data;
}

// PHOTO //

export async function uploadPetPhoto(petId, image) {
  const formData = new FormData();
  formData.append('image', image);

  const res = await apiClient.post(`${PETS_API_PATH}/${petId}/${PHOTO_ENDPOINT}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return res.data;
}

// ADOPTION //

export async function adoptPet(petId) {
  const res = await apiClient.post(`${PETS_API_PATH}/${petId}/${ADOPTIONS_ENDPOINT}`, {
    adoptionType: 'adoption',
  });

  return res.data;
}

export async function returnPet(petId) {
  const res = await apiClient.delete(`${PETS_API_PATH}/${petId}/${ADOPTIONS_ENDPOINT}`);

  return res.data;
}

// SHORTHANDS //

export async function getRecentlyAddedPets() {
  const res = await apiClient.get(`${PETS_API_PATH}/${RECENTLY_ADDED_ENDPOINT}`);

  return res.data;
}

export async function getAvailablePets() {
  const res = await apiClient.get(`${PETS_API_PATH}/${AVAILABLE_ENDPOINT}`);

  return res.data;
}
