import { Navigate } from 'react-router-dom';
import { useAuth } from '@lib/auth';

import { LOGIN } from '@lib/routes';

export default function PrivateRoute({ element, redirectTo = LOGIN }) {
  const { isAuth, currentUser } = useAuth();

  //TODO: review flow of isAuth state & replace currentUser with isAuth
  console.log('isAuth => ', isAuth);
  console.log('currentUser => ', currentUser);

  return currentUser ? element : <Navigate to={redirectTo} />;
}
