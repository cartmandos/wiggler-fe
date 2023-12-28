import { LOGIN, FORBIDDEN } from './constants';
// import { revokeLoggedInSession } from '@lib/auth/useAuthProvider';

const handleUnauthorized = () => {
  // revokeLoggedInSession();
  if (window.location.pathname !== LOGIN) {
    window.location.href = LOGIN;
  }
};

const handleForbidden = () => {
  window.location.href = FORBIDDEN;
};

export { handleUnauthorized, handleForbidden };
