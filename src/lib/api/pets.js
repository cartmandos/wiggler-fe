import {apiClient} from '@lib/network'

const PETS_API_PATH = '/pets'

export async function getPets() {
  const res = await apiClient.get(`${PETS_API_PATH}`)

  return res.data
}

export async function postPet(data) {
  const res = await apiClient.post(`${PETS_API_PATH}`, data)

  return res.data
}

export async function delPet(petId) {
  const res = await apiClient.delete(`${PETS_API_PATH}/${petId}`)

  return res.data
}

export async function getPet(petId) {
  const res = await apiClient.get(`${PETS_API_PATH}/${petId}`)

  return res.data
}

export async function adoptPet(petId) {
  const res = await apiClient.post(`${PETS_API_PATH}/${petId}/adoptions`, {
    adoptionType: 'adoption',
  })

  return res.data
}
