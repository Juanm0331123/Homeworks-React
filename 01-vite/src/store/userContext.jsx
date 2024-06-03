import React from 'react';

export const UserContext = React.createContext({
    state: { isLoggedIn: false, username: '', lastVisited: '/' },
    setState: () => {}
  });