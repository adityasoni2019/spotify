// SpotifyContext.js
import React, { createContext, useState } from 'react';

const SpotifyContext = createContext();

export const SpotifyProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [getLikedSongsIds, saveLikedSongsIds] = useState(''); // this is an array of ids of the liked songs. 

  return (
    <SpotifyContext.Provider value={{ accessToken, setAccessToken, userId, setUserId, getLikedSongsIds, saveLikedSongsIds }}>
      {children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyContext;
