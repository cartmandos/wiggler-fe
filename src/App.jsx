import { ThemeProvider } from '@styles/ThemeProvider';
import { AuthProvider } from '@lib/auth';
import { PetsProvider } from '@store/PetsProvider';
import { UserProvider } from '@store/UserProvider';

import { Router } from '@lib/routes';

import { Main, Footer } from '@components/layouts';
import NavBar from '@components/NavBar';

import '@fontsource/roboto';

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <PetsProvider>
          <UserProvider>
            <NavBar />
            <Main>
              <Router />
            </Main>
            <Footer />
          </UserProvider>
        </PetsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
