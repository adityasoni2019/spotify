// SpotifyContext.js
import React, { createContext, useState } from 'react';

const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userId, setUserId] = useState(null);

  return (
    <SpotifyContext.Provider value={{ accessToken, setAccessToken, userId, setUserId }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContext;
