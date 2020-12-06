import React, { useState } from 'react';

const defaultState = {
  user: { email: '', role: '' },
  token: '',
};

export const GlobalContext = React.createContext();

// eslint-disable-next-line react/prop-types
const User = ({ children }) => {
  const [user, setUser] = useState(defaultState);
  return (
    <GlobalContext.Provider value={[user, setUser]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default User;
