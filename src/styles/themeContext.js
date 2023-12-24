import { createTheme } from '@mui/material/styles';
import { theme } from './theme';

const themeContext = createTheme(theme);

export const useThemeContext = () => {
  return themeContext;
};
