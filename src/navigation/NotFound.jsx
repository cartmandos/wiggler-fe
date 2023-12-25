import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { ROOT } from './CONSTANTS';
import { useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import notFoundImage from '@assets/images/404_01.png';

const Code = styled('code')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const BoxWrapper = styled(Box)({
  backgroundImage: `url(${notFoundImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '50%',
  backgroundPosition: 'right',
  justifyContent: 'center',
  height: '92vh',
});

export const NotFound = () => {
  let location = useLocation();

  return (
    <BoxWrapper>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 10,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Oops!
        </Typography>
        <Typography variant="body1" gutterBottom paragraph>
          We couldn&apos;t find the page <Code>{location.pathname}</Code> you were looking for.
        </Typography>
        <Typography variant="body2">
          Don&apos;t worry, here&apos;s the way <Link to={ROOT}>back home</Link>.
        </Typography>
      </Box>
    </BoxWrapper>
  );
};
