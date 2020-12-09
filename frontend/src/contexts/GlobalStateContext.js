import React, { useState } from 'react';

const defaultState = {
  user: { email: 'thisisatest', role: 'fuck' },
  token: 'asdas',
};

export const Context = React.createContext();

// eslint-disable-next-line react/prop-types
const UserStore = ({ children }) => {
  const [user, setUser] = useState(defaultState);
  return (
    <Context.Provider value={[user, setUser]}>{children}</Context.Provider>
  );
};

export default UserStore;
