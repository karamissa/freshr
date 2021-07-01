import { useState } from 'react';
import {
  Wrapper,
  ArtistWrapper,
  ArtistResult,
  ArtistImage,
  ArtistName,
  TrackWrapper
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
            <ArtistResult key={artist.id} href={artist.spotifyLink}>
              {artist.images && (
                <ArtistImage src={artist.images[2].url} alt={artist.name} />
              )}

              <ArtistName>{artist.name}</ArtistName>
            </ArtistResult>
          ))}
      </ArtistWrapper>

      <TrackWrapper>
        {trackResults &&
          trackResults.map((track) => (
            <ArtistResult key={track.id} href={track.spotifyLink}>
              <ArtistImage src={track.images[2].url} alt={track.name} />
              <ArtistName>{track.name}</ArtistName>
            </ArtistResult>
          ))}
      </TrackWrapper>
    </Wrapper>
  );
};

export default SearchWidget;
