import { Grid, Container } from '@mui/material';

import PetCard from './PetCard';

const PetsContainer = ({ pets }) => {
  return (
    <div>
      <Container className="PetCard">
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
};

export default PetsContainer;
