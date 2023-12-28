import { useState, useEffect, createContext, useContext } from 'react';
import { getPets, adoptPet, removePet } from '@lib/api/pets';
import { getUserAdoptions } from '@lib/api/users';

const PetsContext = createContext();

const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [myPets, setMyPets] = useState([]);
  const [savedPets, setSavedPets] = useState([]);

  const fetchPets = async () => {
    try {
      const res = await getPets();
      console.log(res.pagination);

      setPets(res.pets);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMyAdoptedPets = async () => {
    try {
      const res = await getUserAdoptions();
      console.log(res.adoptions);

      console.log(res.pagination);

      setMyPets(res.adoptions);
    } catch (err) {
      console.log(err);
    }
  };

  const addPet = async (petId) => {
    try {
      const res = await adoptPet(petId);

      console.log(res.data);
      setMyPets([...pets, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  //  const addPet = async (newPet) => {
  //    try {
  //      const res = await adoptPet(newPet)

  //      console.log(res.data)
  //      setMyPets([...pets, res.data])
  //    } catch (error) {
  //      console.error(error)
  //    }
  //  }

  const deletePet = async (petId) => {
    try {
      const res = await removePet(petId);
      const newPetsList = pets.filter((pet) => pet.id !== petId);
      setPets(newPetsList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PetsContext.Provider
      value={{ pets, setPets, adoptPet, deletePet, fetchPets, fetchMyAdoptedPets, myPets }}
    >
      {children}
    </PetsContext.Provider>
  );
};

const usePets = () => useContext(PetsContext);

export { PetsProvider, usePets };
