import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { RecommendationsContext } from '../contexts/RecommendationsContext';
import TrackCard from './cards/TrackCard';
import ArtistCard from './cards/ArtistCard';
import Recommendations from './cards/Recommendations';

const Wrapper = styled.div`
  display: flex;
  color: var(--white);
  align-items: center;
  gap: 0.5em;
  margin: 0 1em 1.5em;
`;

const SearchResults = () => {
  const { chosenSuggestion } = useContext(RecommendationsContext);

  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchResult = async () => {
      const res = await fetch(
        `http://localhost:5000/spotify/${chosenSuggestion.type}/${chosenSuggestion.id}`
      );
      const data = await res.json();

      console.log(data);

      setResult(data);
    };
    fetchResult();
  }, [chosenSuggestion]);

  return (
    <Wrapper>
      {result && (
        <>
          {result.type === 'track' && <TrackCard track={result} />}
          {result.type === 'artist' && <ArtistCard artist={result} />}
          <Recommendations recommendations={result.recommendations} />
        </>
      )}
    </Wrapper>
  );
};

export default SearchResults;
