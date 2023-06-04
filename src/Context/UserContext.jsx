import { createContext } from 'react';
import { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
const UserProvider = createContext();
const UserContext = ({ children }) => {
  const [myUser, setmyUser] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  useEffect(() => {
    setmyUser({ user, isAuthenticated });
  }, [isAuthenticated, user]);

  return (
    <UserProvider.Provider value={{ myUser, loginWithRedirect, logout }}>
      {children}
    </UserProvider.Provider>
  );
};
export const useUserContext = () => {
  return useContext(UserProvider);
};
export default UserContext;
