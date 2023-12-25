/* The My Pets Page should display cards with pets the user currently owns/fosters or saved for later. Each card should display an image of the pet, the pet's name, current status (foster/adopted), and a button that takes the user to a full detailed description of the pet. */

/* The My Pets Page component will display cards of all the pets the user owns/fosters. The user will be able to toggle between pets and saved pets. The Pet Card Component will display an image of the pet, the pet's name, the pet's current status (foster/adopted), and a see more button that will take the user to a detailed description of the pet.  */

import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { usePets } from '@store/PetsProvider';
import PetCard from '../PetCard';
import { Container } from '@mui/material';

const MyPets = () => {
  const { myPets, fetchMyAdoptedPets } = usePets();

  useEffect(() => {
    fetchMyAdoptedPets();
  }, []);

  return (
    <div className="PetsContainer">
      Pets
      <Container>
        <Grid container spacing={2}>
          {myPets.map((pet) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pet.id}>
              <PetCard pet={pet} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MyPets;
