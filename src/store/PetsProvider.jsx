import { useState, createContext, useContext } from 'react';

import { getPets } from '@lib/api/pets';

const PetsContext = createContext();

const PetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);

  const fetchPets = async () => {
    try {
      const res = await getPets();
      console.log(res.pagination);

      setPets(res.pets);
    } catch (err) {
      console.log(err);
    }
  };

  return <PetsContext.Provider value={{ pets, fetchPets }}>{children}</PetsContext.Provider>;
};

const usePets = () => useContext(PetsContext);

export { PetsProvider, usePets };
