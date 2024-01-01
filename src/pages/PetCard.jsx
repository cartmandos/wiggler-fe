import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Stack,
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';

// import PetActionButton from '@components/buttons/PetActionButton';
import { useUser } from '@store/UserProvider';

import dogImage from '@assets/images/pets/dog_01.jpg';

const PetCard = ({ pet }) => {
  const { save, unsave, checkSaved } = useUser();
  const [isSaved, setIsSaved] = useState(checkSaved(pet));

  const navigate = useNavigate();

  const handleSave = (e) => {
    // e.stopPropagation();
    save(pet);
    setIsSaved(true);
  };

  const handleUnsave = (e) => {
    // e.stopPropagation();
    unsave(pet);
    setIsSaved(false);
  };

  // LOGGING
  // console.log(isSaved);
  // console.log(savedPets);

  return (
    <Card sx={{ maxWidth: 180 }} className="PetCard" style={{ position: 'relative' }}>
      {/* <CardMedia component="img" alt={pet?.name} height="140" image={pet?.image} /> */}
      <CardActionArea onClick={() => navigate(`/pets/${pet.id}`)}>
        <CardMedia
          component="div"
          alt={pet?.name}
          height="140"
          width="100%"
          sx={{ height: 140 }}
          image={dogImage}
        >
          <Stack
            width="max-content"
            spacing={2}
            backgroundColor="rgba(0, 0, 0, 0.3)"
            padding={1}
            position="absolute"
            bottom="35%"
          >
            <Typography variant="body2" color="white">
              {pet.status}
            </Typography>
          </Stack>
        </CardMedia>

        <CardContent>
          <Typography variant="h5" component="div">
            {pet?.name}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions style={{ position: 'absolute', bottom: '0', right: '0' }}>
        <IconButton aria-label="add to favorites" onClick={isSaved ? handleUnsave : handleSave}>
          <FavoriteIcon color={isSaved ? 'error' : 'disabled'} />
        </IconButton>
        {/* {isSaved ? (
          <PetActionButton action={handleUnsave} label="Unsave" />
        ) : (
          <PetActionButton action={handleSave} label="Save" />
        )} */}
      </CardActions>
    </Card>
  );
};

export default PetCard;
