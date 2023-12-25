/*
OFFICIAL:
Homepage (Logged out)

Components:
Login/Signup button
Login/Signup modal (triggered when the button is pressed)
Header welcoming users to the site
Text explaining what the service is.
Link to the Search Page

Homepage (Logged In)

	Components:
Header welcoming user by their first and last name
Search button (can either be a link to search page or open modal of search component)
Should have a link to → My Pets Page
Has access to navigate to profile settings 


  The Logged-out Homepage should have a Login/Signup button that opens a 
  Login/Signup modal when clicked. The Logged-in Homepage should display 
  the user's first and last name, a search button, and links to the user's
   My Pets Page and Profile Settings page.
  
  The homepage will have a login/signup button and will display a modal with the
  respective form when clicked. The homepage will also contain a header
  welcoming users to the site and a section with a brief description of the
  service, along with a link to the search page. Once logged in, the header will
  welcome the user by their first and last name and display a search button that
  will open a modal with the search component. The user will also have access to
  navigate to their profile settings and to their My Pets Page.
 */
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'mui-image';
import Grid from '@mui/material/Grid';
import homeImage from '@assets/images/home_01.png';
import { useModal } from '@pages/Sign/ModalProvider';
import { useNavigate } from 'react-router-dom';

const LoginButton = ({ LoginModal, onLogin }) => {
  return (
    <Button
      sx={{ borderRadius: 20 }}
      color="secondary"
      size="large"
      variant="contained"
      onClick={LoginModal ? onLogin : undefined}
      href={!LoginModal ? '/login' : undefined}
    >
      Join
    </Button>
  );
};

const MyPetsButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      sx={{ borderRadius: 20 }}
      color="secondary"
      size="large"
      variant="contained"
      onClick={() => navigate('/my-pets')}
    >
      My Pets
    </Button>
  );
};

const HeaderWelcome = ({ userName }) => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {userName ? 'HI, ' : "HI, I'M "}
        <Box component="span" color="text.secondary">
          {userName ? userName : 'WIGGLER'}
        </Box>
      </Typography>
      <Typography variant="h2" fontWeight="bold" gutterBottom>
        {userName ? 'WE MISSED YOU!' : "LET'S BE FRIENDS?"}
      </Typography>
    </Box>
  );
};

export default function HomeHero({ userName, LoginModal, onLogin }) {
  return (
    <Container sx={{ mt: 15, mb: 2 }} maxWidth="sm">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <HeaderWelcome userName={userName} />
          {userName ? <MyPetsButton /> : <LoginButton onLogin={onLogin} LoginModal={LoginModal} />}
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box sx={{ position: 'relative', height: '100%' }}>
            <Image
              src={homeImage}
              height="100%"
              width="100%"
              fit="scale-down"
              duration={3000}
              easing="cubic-bezier(0.7, 0, 0.6, 1)"
              showLoading={false}
              errorIcon={false}
              shift={null}
              distance="100px"
              shiftDuration={900}
              bgColor="inherit"
              sx={{ position: 'absolute', bottom: 0, right: 0 }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
