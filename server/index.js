const express = require('express');
const dotenv = require('dotenv');
const SpotifyWebApi = require('spotify-web-api-node');
const getSpotifyToken = require('./getSpotifyToken');

const app = express();
dotenv.config();

const spotifyClientID = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyApi = new SpotifyWebApi({
  clientId: spotifyClientID,
  clientSecret: spotifyClientSecret
});

const setSpotifyToken = async () => {
  const accessToken = await getSpotifyToken();
  spotifyApi.setAccessToken(accessToken);
};

setSpotifyToken();

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
