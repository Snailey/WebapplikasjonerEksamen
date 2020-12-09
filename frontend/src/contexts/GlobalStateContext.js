import React, { useState } from 'react';

export const Context = React.createContext();

// eslint-disable-next-line react/prop-types
const UserStore = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
};

export default UserStore;
