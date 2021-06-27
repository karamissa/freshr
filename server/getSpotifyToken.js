const fetch = require('node-fetch');

const spotifyClientID = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const getSpotifyToken = async () => {
  const authBuffer = Buffer.from(
    `${spotifyClientID}:${spotifyClientSecret}`
  ).toString('base64');

  const fetchTokenOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${authBuffer}`
    },
    body: 'grant_type=client_credentials'
  };

  const res = await fetch(
    'https://accounts.spotify.com/api/token',
    fetchTokenOptions
  );
  const data = await res.json();

  return data.access_token;
};

module.exports = getSpotifyToken;
