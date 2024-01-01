import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Container } from '@mui/material';

import { usePets } from '@store/PetsProvider';
import { useUser } from '@store/UserProvider';
import PetCard from '../PetCard';
import PetsContainer from '../PetsContainer';

export default function Pets() {
  const { pets, fetchPets } = usePets();
  const { savedPets, fetchSavedPets } = useUser();

  useEffect(() => {
    fetchPets();
    fetchSavedPets();
  }, []);

  console.log('fetched saved: ', savedPets);

  return (
    <div className="Pets">
      <PetsContainer pets={pets} />
    </div>
  );
}

/* 
The Search Page component will have a search bar that can toggle between basic and advanced search. 
Basic search will allow searching based on the type of animal, 
while advanced search will allow searching based on adoption status, 
height, weight, type, and name. 
The search results will be displayed in a list of animal card components that link to the pet page. 
*/
