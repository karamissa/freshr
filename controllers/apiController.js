const spotifyClient = require('../spotify/spotifyClient');

const search = async (req, res) => {
  const searchData = await spotifyClient.search(req.params.value);

  let artistResults = searchData.artists.items.map((artist) => {
    let images = null;
    if (artist.images[0] !== undefined) {
      images = artist.images;
    }

    return {
      id: artist.id,
      name: artist.name,
      link: artist.external_urls.spotify,
      images
    };
  });
  artistResults = artistResults.slice(0, 2);

  const trackResults = searchData.tracks.items.map((track) => {
    let trackArtists = track.artists.map((artist) => {
      return artist.name;
    });

    trackArtists = trackArtists.join(', ');

    return {
      id: track.id,
      name: track.name,
      artists: trackArtists,
      link: track.external_urls.spotify,
      images: track.album.images
    };
  });

  res.send({
    trackResults,
    artistResults
  });
};

const getTrack = async (req, res) => {
  const data = await spotifyClient.getTrack(req.params.id);

  const {
    id,
    name,
    type,
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
    return { id, name, link: spotify };
  });

  const recommendations = await getRecommendations({
    recSeed: 'track',
    seedArtist: artists[0].id,
    seedTracks: id
  });

  res.send({
    id: id,
    name,
    type,
    link: spotify,
    images,
    artists,
    recommendations
  });
};

const getArtist = async (req, res) => {
  const artistData = await spotifyClient.getArtist(req.params.id);
  const { tracks } = await spotifyClient.getArtistTopTracks(req.params.id);

  const {
    id,
    name,
    type,
    images,
    external_urls: { spotify }
  } = artistData;

  const topTracks = tracks.map((track) => {
    const artists = track.artists.map((artist) => {
      return {
        id: artist.id,
        name: artist.name
      };
    });

    return {
      id: track.id,
      name: track.name,
      link: track.external_urls.spotify,
      artists
    };
  });

  const recommendations = await getRecommendations({
    recSeed: 'artist',
    seedArtist: id,
    seedTracks: topTracks.map((track) => track.trackID)
  });

  res.send({
    id: id,
    name,
    link: spotify,
    type,
    images,
    topTracks,
    recommendations
  });
};

const getRecommendations = async (recInfo) => {
  seedObj = {
    seed_artists: recInfo.seedArtist,
    seed_tracks:
      recInfo.recSeed === 'artist'
        ? recInfo.seedTracks.slice(0, 3)
        : recInfo.seedTracks
  };

  const data = await spotifyClient.getRecommendations(seedObj);

  const recommendations = data.tracks.map((track) => {
    return {
      id: track.id,
      name: track.name,
      images: track.album.images,
      spotifyLink: track.external_urls.spotify,
      artists: track.artists.map((artist) => {
        return {
          id: artist.id,
          name: artist.name,
          link: artist.external_urls.spotify
        };
      })
    };
  });

  return recommendations;
};

module.exports = {
  search,
  getTrack,
  getArtist
};
