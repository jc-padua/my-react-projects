import { createContext, useContext, useState } from 'react';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayName, setDisplayName] = useState('');

  return (
    <UserContext.Provider
      value={{
        displayName,
        setDisplayName,
        isLoggedIn,
        toggleLog: () => setIsLoggedIn(!isLoggedIn),
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);
