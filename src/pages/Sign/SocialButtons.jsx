import Button from '@mui/material/Button';
import styled from '@emotion/styled';

import GoogleIcon from '@assets/logos/google-icon.svg?react';

const GoogleSignInButton = styled(Button)({
  textTransform: 'none',
  paddingTop: '1rem',
  paddingBottom: '1rem',
});

export default function SocialButtons() {
  return (
    <GoogleSignInButton
      /*             type="submit"
       */
      startIcon={<GoogleIcon sx={{ verticalAlign: 'middle', height: '18px', width: '18px' }} />}
      fullWidth
      size="large"
      variant="contained"
      color="primary"
      sx={{ borderRadius: 20, mt: 3, mb: 2 }}
    >
      Continue with Google
    </GoogleSignInButton>
  );
}
