import { useState } from 'react';

import { adoptPet, returnPet } from '@lib/api/pets';
import { getUserAdoptions } from '@lib/api/users';

export function useMyPets() {
  const [myPets, setMyPets] = useState([]);

  const fetchMyPets = async () => {
    try {
      const res = await getUserAdoptions();
      console.log(res.adoptions);
      console.log(res.pagination);

      setMyPets(res.adoptions);
    } catch (err) {
      console.log(err);
    }
  };

  const addMyPet = async (petId) => {
    try {
      const res = await adoptPet(petId);
      console.log(res.data);

      setMyPets([...myPets, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const removeMyPet = async (petId) => {
    try {
      const res = await returnPet(petId);
      console.log(res.data);

      const newPetsList = myPets.filter((pet) => pet.id !== petId);
      setMyPets(newPetsList);
    } catch (error) {
      console.error(error);
    }
  };

  return { myPets, fetchMyPets, addMyPet, removeMyPet };
}
