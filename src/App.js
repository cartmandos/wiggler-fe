import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styles/ThemeProvider';
import { RouterConfig } from 'navigation/RouterConfig';
import { AuthProvider } from 'navigation/Auth/AuthProvider';
import { Main, Footer } from 'components/layouts';
import NavBar from 'components/NavBar';
import '@fontsource/roboto';

export default function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <NavBar />
                <Main>
                    <BrowserRouter>
                        <RouterConfig />
                    </BrowserRouter>
                </Main>
                <Footer />
            </AuthProvider>
        </ThemeProvider>
    );
}
