const fetch = require('node-fetch');

class SpotifyChad {
  constructor({ spotifyClientID, spotifyClientSecret }) {
    this.spotifyClientID = spotifyClientID;
    this.spotifyClientSecret = spotifyClientSecret;
    this.accessToken;
    this.fetchOptions;
  }

  setupClient = async () => {
    const authBuffer = Buffer.from(
      `${this.spotifyClientID}:${this.spotifyClientSecret}`
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

    this.accessToken = data.access_token;
    this.fetchOptions = {
      headers: {
        Authorization: `Bearer ${this.accessToken}`
      }
    };
  };

  search = async (input) => {
    const res = await fetch(
      `https://api.spotify.com/v1/search?q=${input}&type=track,artist&offset=0&limit=5`,
      this.fetchOptions
    );
    const data = await res.json();

    return data;
  };

  getTrack = async (trackID) => {
    const res = await fetch(
      `https://api.spotify.com/v1/tracks/${trackID}`,
      this.fetchOptions
    );
    const data = await res.json();

    return data;
  };

  getArtist = async (artistID) => {
    const res = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}`,
      this.fetchOptions
    );
    const data = await res.json();

    return data;
  };

  getArtistTopTracks = async (artistID) => {
    const res = await fetch(
      `https://api.spotify.com/v1/artists/${artistID}/top-tracks?market=GB`,
      this.fetchOptions
    );
    const data = await res.json();

    return data;
  };

  // I'll figure this out later
  // getRecommendations = async (input) => {
  //   const res = await fetch(
  //     `https://api.spotify.com/v1/recommendations`,
  //     this.fetchOptions
  //   );
  //   const data = await res.json();

  //   return data;
  // };
}

module.exports = SpotifyChad;
