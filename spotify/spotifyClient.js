const SpotifyChad = require('./spotifyLogic');
const dotenv = require('dotenv');

dotenv.config();

const spotifyClientID = process.env.SPOTIFY_CLIENT_ID;
const spotifyClientSecret = process.env.SPOTIFY_CLIENT_SECRET;

const spotifyClient = new SpotifyChad({
  spotifyClientID,
  spotifyClientSecret
});

const interval = 1000 * 60 * 60;

spotifyClient.setupClient();
setInterval(() => {
  spotifyClient.setupClient();
}, interval);

module.exports = spotifyClient;
