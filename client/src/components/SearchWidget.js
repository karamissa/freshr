import { useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { RecommendationsContext } from '../contexts/RecommendationsContext';

const Wrapper = styled(motion.div)`
  position: absolute;
  background-color: var(--black);
  color: var(--white);
  border-radius: 10px;
  width: 102%;
  font-weight: bold;
  margin-bottom: 1em;
  overflow: hidden;
`;

const Image = styled.img`
  margin: 0.2em;
  height: 3.5em;
  width: 3.5em;
`;

const Result = styled.a`
  display: flex;
  align-items: center;
  padding-left: 0.5em;
  gap: 0.5em;
  transition: background-color 0.4s ease-out;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
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
    setChosenSuggestion
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

    setChosenSuggestion({ type: 'artist', id: artistID });
  };

  const handleTrackClick = (e) => {
    let trackID;
    if (e.target.tagName === 'A') {
      trackID = e.target.dataset.id;
    } else if (e.target.tagName === 'IMG') {
      trackID = e.target.parentElement.dataset.id;
    } else {
      trackID = e.target.parentElement.parentElement.dataset.id;
    }

    setChosenSuggestion({ type: 'track', id: trackID });
  };

  return (
    <Wrapper
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
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

      <TrackWrapper onClick={handleTrackClick}>
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
