import { useEffect } from 'react';
import { Grid, Container } from '@mui/material';

import { useSavedPets } from '@hooks/useSavedPets';
// import PetCard from '../PetCard';
import PetsContainer from '../PetsContainer';

export default function SavedPets() {
  const { savedPets, fetchSavedPets } = useSavedPets();

  useEffect(() => {
    fetchSavedPets();
  }, []);

  return (
    <div className="SavedPets">
      <PetsContainer pets={savedPets} />
    </div>
  );
}

/* The My Pets Page should display cards with pets the user currently owns/fosters or saved for later. 
Each card should display an image of the pet, the pet's name, 
current status (foster/adopted), 
and a button that takes the user to a full detailed description of the pet. */

/* The My Pets Page component will display cards of all the pets the user owns/fosters. 
The user will be able to toggle between pets and saved pets. 
The Pet Card Component will display an image of the pet, 
the pet's name, the pet's current status (foster/adopted), 
and a see more button that will take the user to a detailed description of the pet.  */
