import { useEffect } from 'react';
import { Grid, Container } from '@mui/material';

import { usePets } from '@store/PetsProvider';
import PetCard from '../PetCard';

export default function Pets() {
  const { pets, fetchPets } = usePets();

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <div className="PetsContainer">
      Pets
      <Container>
        <Grid container spacing={2}>
          {pets.map((pet) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={pet.id}>
              <PetCard pet={pet} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

/* Search Page should have a search bar with the option to toggle between basic and advanced search. 
In basic search, the user can search for pets based on the type of animal. 
In advanced search, the user can search based on adoption status, height, weight, type, or name.
 */

/* The Search Page component will have a search bar that can toggle between basic and advanced search. 
Basic search will allow searching based on the type of animal, 
while advanced search will allow searching based on adoption status, 
height, weight, type, and name. 
The search results will be displayed in a list of animal card components that link to the pet page. */
