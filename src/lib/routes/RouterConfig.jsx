import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '@lib/auth';

import HomePage from '@pages/Home';
import LoginPage from '@pages/Login';
import SignUpPage from '@pages/Sign/SignUp';
import PetsPage from '@pages/Pets';
import PetDetailsPage from '@pages/PetDetails';
import MyPetsPage from '@pages/MyPets';
import SavedPets from '@pages/SavedPets';
import NotFoundPage from '@pages/NotFound';
import ForbiddenPage from '@pages/Forbidden';

import { ROOT, LOGIN, DASHBOARD, SIGNUP, FORBIDDEN } from './constants';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={ROOT} element={<HomePage />} />
      <Route path={DASHBOARD} element={<PrivateRoute element={<HomePage />} />} />

      <Route path={LOGIN} element={<LoginPage />} />
      <Route path={SIGNUP} element={<SignUpPage />} />

      <Route path="/pets" element={<PrivateRoute element={<PetsPage />} />} />
      <Route path="/pets/:id" element={<PetDetailsPage />} />

      <Route path="/my-pets" element={<MyPetsPage />} />
      <Route path="/saved-pets" element={<SavedPets />} />

      <Route path={FORBIDDEN} element={<ForbiddenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
