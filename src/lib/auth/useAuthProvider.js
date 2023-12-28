import { useEffect, useState } from 'react';
import { useSessionStorage } from '@hooks/useSessionStorage';
import { login, logout } from '@lib/api/auth';

export function useAuthProvider() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuth, setIsAuth] = useState(false);

  const [currentUser, setCurrentUser, revokeCurrentUser] = useSessionStorage('userdetails', null);

  useEffect(() => {
    const unsubscribe = () => {
      console.log('currentUser => ', currentUser);
      if (currentUser) {
        authenticate();
      }
      setIsLoading(false);
    };

    unsubscribe();
  }, []);

  const authenticate = () => {
    currentUser && setIsAuth(currentUser?.isAuthenticated === true);
  };

  const signIn = async (email, password) => {
    try {
      const res = await login({ email, password });

      res && res.data && setCurrentUser({ ...res.data, isAuthenticated: true });
      authenticate();
    } catch (error) {
      if (error.response) {
        throw Error(error.response.data?.message);
      }
      if (error.request) {
        throw Error('No response from server');
      } else {
        console.error(error);
      }
    }
  };

  const signOut = async () => {
    try {
      await logout();

      revokeCurrentUser();
      authenticate();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    isLoading,
    isAuth,
    currentUser,
    signIn,
    signOut,
  };
}
