const spotifyClient = require('../spotify/spotifyClient');

const search = async (req, res) => {
  const data = await spotifyClient.search(req.params.value);

  res.send(data);
};

const getTrack = async (req, res) => {
  const data = await spotifyClient.getTrack(req.params.id);

  res.send(data);
};

const getAlbum = async (req, res) => {
  const data = await spotifyClient.getAlbum(req.params.id);

  res.send(data);
};

const getArtist = async (req, res) => {
  const data = await spotifyClient.getArtist(req.params.id);

  res.send(data);
};

// const getRecommendations = async (req, res) => {};

module.exports = { search, getTrack, getAlbum, getArtist };
