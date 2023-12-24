import { usePets } from '@store/PetsProvider';
import { useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';

import dogImage from '@assets/images/pets/dog_01.jpg';

const PetCard = ({ pet }) => {
  const { deletePet, adoptPet } = usePets();
  const navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 180 }}
      className="PetsContainer"
      onClick={() => navigate(`/pets/${pet.id}`)}
    >
      {/* <CardMedia component="img" alt={pet?.name} height="140" image={pet?.image} /> */}
      <CardMedia component="img" alt={pet?.name} height="140" image={dogImage} />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div" align="center">
          {pet?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            adoptPet(pet.id);
          }}
          color="warning"
          size="small"
        >
          Adopt
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            deletePet(pet.id);
          }}
          color="warning"
          size="small"
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default PetCard;
