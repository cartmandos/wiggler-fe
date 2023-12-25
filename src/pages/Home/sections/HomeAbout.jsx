import { styled } from '@mui/material/styles';
import { Container, Box, Typography } from '@mui/material';
import dogImage from '@assets/images/home_02.png';

const BackgroundContainer = styled(Container)(({ theme }) => ({
  backgroundImage: `url(${dogImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '20%',
  backgroundPosition: '100%',
  [theme.breakpoints.down('sm')]: {
    backgroundSize: '0',
  },
}));

export default function HomeAbout() {
  return (
    <BackgroundContainer sx={{ py: 10 }} maxWidth="md">
      <Box sx={{ px: 3 }}>
        <Typography variant="h4" gutterBottom>
          <strong>Meet a new friend, change a life.</strong>
        </Typography>

        <Typography
          sx={{
            width: 'calc(2/3 * 100%)',
          }}
          variant="h5"
        >
          Our pet adoption platform connects between those looking to adopt and animals in need of
          homes. While you cannot buy love, we can help you find one.
        </Typography>
      </Box>
    </BackgroundContainer>
  );
}
