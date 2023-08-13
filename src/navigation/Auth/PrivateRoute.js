import { Navigate } from 'react-router-dom';
import { LOGIN } from 'navigation/CONSTANTS';
import { useAuth } from './AuthProvider';

export default function PrivateRoute({ element, redirectTo = LOGIN }) {
    const { isAuth } = useAuth();
    return isAuth ? element : <Navigate to={redirectTo} />;
}
