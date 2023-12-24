import { AuthContext } from './AuthContext';
import { useContext } from 'react';
import { useAuthProvider } from './useAuthProvider';

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
