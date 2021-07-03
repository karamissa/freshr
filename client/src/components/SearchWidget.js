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

const SearchWidget = ({ searchResults, setChosenResult }) => {
  const [previousSearchResults, setPreviousSearchResults] = useState({});

  if (searchResults !== previousSearchResults) {
    setPreviousSearchResults(searchResults);
  }

  const { artistResults, trackResults } = previousSearchResults;

  const handleArtistClick = (e) => {
    let artistID;
    if (e.target.tagName === 'A') {
      artistID = e.target.dataset.id;
    }

    if (e.target.parentElement.tagName === 'A') {
      artistID = e.target.parentElement.dataset.id;
    }

    setChosenResult(artistID);
  };

  return (
    <Wrapper>
      <ArtistWrapper onClick={handleArtistClick}>
        {artistResults &&
          artistResults.map((artist) => (
            <Result data-id={artist.id} key={artist.id}>
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
            <Result data-id={track.id} key={track.id}>
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
