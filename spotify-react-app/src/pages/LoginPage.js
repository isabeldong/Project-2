import React from 'react';

function LoginPage() {
  const handleLogin = () => {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = 'https://api.spotify.com/v1';
    const scope = 'user-library-read user-read-private';
    const responseType = 'token';
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=${responseType}`;
  };

  return (
    <div>
      <h1>Login with Spotify</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
