const spotifyClient = require('../spotify/spotifyClient');

const search = async (req, res) => {
  const data = await spotifyClient.search(req.params.value);

  res.send(data);
};

const getTrack = async (req, res) => {
  const data = await spotifyClient.getTrack(req.params.id);

  const {
    id,
    name,
    album: { images },
    external_urls: { spotify }
  } = data;
  const { artists } = data;

  const distilledArtists = artists.map((artist) => {
    const {
      id,
      name,
      external_urls: { spotify }
    } = artist;
    return { artistID: id, artistName: name, artistLink: spotify };
  });

  res.send({
    trackID: id,
    trackName: name,
    trackLink: spotify,
    images,
    artists: distilledArtists
  });
};

const getArtist = async (req, res) => {
  const data = await spotifyClient.getArtist(req.params.id);

  res.send(data);
};

// const getRecommendations = async (req, res) => {};

module.exports = { search, getTrack, getArtist };
