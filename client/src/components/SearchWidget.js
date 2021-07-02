import { useState } from 'react';
import {
  Wrapper,
  Result,
  Image,
  Name,
  ArtistWrapper,
  NoPhoto,
  TrackWrapper,
  TrackInfo,
  TrackArtistsNames
} from '../styled-components/SearchWidgetComponents';

const SearchWidget = ({ searchResults }) => {
  const [previousSearchResults, setPreviousSearchResults] = useState({});

  if (searchResults !== previousSearchResults) {
    setPreviousSearchResults(searchResults);
  }

  const { artistResults, trackResults } = previousSearchResults;

  return (
    <Wrapper>
      <ArtistWrapper>
        {artistResults &&
          artistResults.map((artist) => (
            <Result key={artist.id} href={artist.spotifyLink}>
              {artist.images && (
                <Image src={artist.images[2].url} alt={artist.name} />
              )}
              {!artist.images && <NoPhoto />}

              <Name>{artist.name}</Name>
            </Result>
          ))}
      </ArtistWrapper>

      <TrackWrapper>
        {trackResults &&
          trackResults.map((track) => (
            <Result key={track.id} href={track.spotifyLink}>
              <Image src={track.images[2].url} alt={track.name} />
              <TrackInfo>
                <Name>{track.name}</Name>
                <TrackArtistsNames>{track.artists}</TrackArtistsNames>
              </TrackInfo>
            </Result>
          ))}
      </TrackWrapper>
    </Wrapper>
  );
};

export default SearchWidget;
