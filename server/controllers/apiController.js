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
  const { artists: unprocessedArtists } = data;

  const artists = unprocessedArtists.map((unprocessedArtist) => {
    const {
      id,
      name,
      external_urls: { spotify }
    } = unprocessedArtist;
    return { artistID: id, artistName: name, artistLink: spotify };
  });

  res.send({
    trackID: id,
    trackName: name,
    trackLink: spotify,
    images,
    artists
  });
};

const getArtist = async (req, res) => {
  const artistData = await spotifyClient.getArtist(req.params.id);
  const { tracks } = await spotifyClient.getArtistTopTracks(req.params.id);

  const {
    id,
    name,
    images,
    external_urls: { spotify }
  } = artistData;

  const topTracks = tracks.map((track) => {
    const trackArtists = track.artists.map((artist) => {
      return {
        artistID: artist.id,
        artistName: artist.name
      };
    });

    return {
      trackID: track.id,
      trackName: track.name,
      trackLink: track.external_urls.spotify,
      trackArtists
    };
  });

  res.send({
    artistID: id,
    artistName: name,
    artistLink: spotify,
    images,
    topTracks
  });
};

// const getRecommendations = async (req, res) => {};

module.exports = { search, getTrack, getArtist };
