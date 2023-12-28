import { AuthContext } from './AuthContext';
import { useAuthProvider } from './useAuthProvider';

/**
 * Auth Provider
 * @param {React.children} children
 */
export default function AuthProvider({ children }) {
  const auth = useAuthProvider();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
