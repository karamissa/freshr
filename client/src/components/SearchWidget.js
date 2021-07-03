import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { RecommendationsContext } from '../contexts/RecommendationsContext';

const Wrapper = styled.div`
  background-color: var(--black);
  color: var(--white);
  width: 102%;
  font-weight: bold;
  z-index: 2;
  margin-bottom: 1em;
`;

const Image = styled.img`
  margin: 0.2em;
  height: 3.5em;
  width: 3.5em;
`;

const Result = styled.a`
  display: flex;
  align-items: center;
  margin-left: 0.5em;
  gap: 0.5em;
`;

const Name = styled.p`
  margin: 0.2em 0 0 0;
  font-weight: bold;
`;

const ArtistWrapper = styled.div`
  ::before {
    display: block;
    content: 'Artist Results:';
    font-weight: bold;
    padding: 0.2em 0.4em;
    color: var(--blue);
  }
`;

const NoPhoto = styled.div`
  margin: 0.2em;
  height: 3.5em;
  width: 3.5em;
  background-color: inherit;
`;

const TrackWrapper = styled.div`
  ::before {
    display: block;
    content: 'Track Results:';
    font-weight: bold;
    padding: 0.2em 0.4em;
    color: var(--blue);
  }
`;

const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TrackArtistsNames = styled.p`
  color: var(--gray);
  font-size: 0.8em;
  margin: 0.4em 0 0 0;
`;

const SearchWidget = () => {
  const {
    searchSuggestions,
    prevSearchSuggestions,
    setPrevSearchSuggestions,
    setSearchResult
  } = useContext(RecommendationsContext);

  useEffect(() => {
    if (searchSuggestions !== prevSearchSuggestions) {
      setPrevSearchSuggestions(searchSuggestions);
    }
  }, [searchSuggestions, prevSearchSuggestions, setPrevSearchSuggestions]);

  const { artistResults, trackResults } = prevSearchSuggestions;

  const handleArtistClick = (e) => {
    let artistID;
    if (e.target.tagName === 'A') {
      artistID = e.target.dataset.id;
    }

    if (e.target.parentElement.tagName === 'A') {
      artistID = e.target.parentElement.dataset.id;
    }

    setSearchResult(artistID);
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
