import { createContext, useContext } from 'react';

import { useSavedPets } from '@hooks/useSavedPets';

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const saved = useSavedPets();

  return <UserContext.Provider value={saved}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
const useUser = () => useContext(UserContext);

export { UserProvider, useUser };
