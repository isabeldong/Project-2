// helper function to make requests to Spotify’s API
import axios from 'axios';

const SPOTIFY_API_BASE_URL = 'https://api.spotify.com/v1';

// Get a user's playlists
export const getUserPlaylists = (accessToken) => {
  return axios.get(`${SPOTIFY_API_BASE_URL}/me/playlists`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// Get track data for a playlist
export const getPlaylistTracks = (playlistId, accessToken) => {
  return axios.get(`${SPOTIFY_API_BASE_URL}/playlists/${playlistId}/tracks`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
