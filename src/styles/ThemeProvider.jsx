import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useThemeContext } from './themeContext';
import CssBaseline from '@mui/material/CssBaseline';

export function ThemeProvider({ children }) {
    const theme = useThemeContext();

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
}
