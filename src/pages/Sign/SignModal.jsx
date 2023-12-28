import { LoginModal } from '@pages/Login';
import { SignupModal } from '@pages/Sign/SignUp';
import { ModalProvider as ModalRouter, useModalPath } from './ModalProvider';

const MODAL_ROOT_PATH = 'login';

export function ModalRoute({ path, children }) {
  const currentPath = useModalPath();
  return currentPath === path ? children : null;
}

export function SignModal({ open, onClose, defaultPath = MODAL_ROOT_PATH }) {
  return (
    <ModalRouter defaultPath={defaultPath}>
      <ModalRoute path="signup">
        <SignupModal open={open} onClose={onClose} />
      </ModalRoute>
      <ModalRoute path="login">
        <LoginModal open={open} onClose={onClose} />
      </ModalRoute>
    </ModalRouter>
  );
}
