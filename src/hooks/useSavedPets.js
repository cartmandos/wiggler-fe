import { useState } from 'react';

import { getUserSavedPets, savePet, unSavePet } from '@lib/api/users';

export function useSavedPets() {
  const [savedPets, setSavedPets] = useState([]);

  const fetchSavedPets = async () => {
    try {
      const res = await getUserSavedPets();
      const savedPets = res.savedPets;
      console.log(savedPets);

      setSavedPets(savedPets);
    } catch (err) {
      console.log(err);
    }
  };

  const save = async (pet) => {
    try {
      console.log('saving... => ', pet);
      const res = await savePet(pet.id);
      console.log(res.data);

      setSavedPets([...savedPets, pet]);
    } catch (error) {
      console.error(error);
    }
  };

  const unsave = async (pet) => {
    try {
      const res = await unSavePet(pet.id);
      console.log(res.data);

      setSavedPets(savedPets.filter((savedPet) => savedPet.id !== pet.id));
    } catch (error) {
      console.error(error);
    }
  };

  const checkSaved = (pet) => {
    return savedPets.some((savedPet) => savedPet.id === pet.id);
  };

  return { savedPets, fetchSavedPets, save, unsave, checkSaved };
}
