import React, { useState, useEffect } from 'react';
import { getUserPlaylists } from '../spotify';

function HomePage() {
  const [playlists, setPlaylists] = useState([]);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    if (accessToken) {
      getUserPlaylists(accessToken)
        .then((response) => setPlaylists(response.data.items))
        .catch((error) => console.error('Error fetching playlists', error));
    }
  }, [accessToken]);

  return (
    <div>
      <h1>Your Spotify Playlists</h1>
      <ul>
        {playlists.map((playlist) => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
