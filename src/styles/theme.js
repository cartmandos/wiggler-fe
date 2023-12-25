import { red } from '@mui/material/colors';

export const theme = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#E6E2E4',
    },
    secondary: {
      main: '#E9718B',
      contrastText: '#fff',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#E6E2E4',
      paper: '#E6E2E4',
    },
    text: {
      primary: '#000000',
      secondary: '#C24233',
      tertiary: '#64574B',
    },
    icon: {
      main: '#3c342d',
      contrastText: '#fff',
    },
    form: {
      main: '#000',
      secondary: '#747474',
    },
  },
};
