import { lazy, useContext, Suspense } from 'react';
import styled from 'styled-components';
import { RecommendationsContext } from '../contexts/RecommendationsContext';
import SearchSection from './SearchSection';
const SearchResult = lazy(async () => await import('./SearchResult'));

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
`;

const HelpText = styled.div`
  color: var(--white);
  background: var(--black);
  border: 2px solid var(--blue);
  text-align: center;
  padding: 1.2em;
  margin: 1em;
  border-radius: 20px;
  font-weight: 600;
`;

const Main = () => {
  const { userInput, searchSuggestions, chosenSuggestion } = useContext(
    RecommendationsContext
  );

  const renderLoad = () => <p>Loading...</p>;

  return (
    <Wrapper>
      <SearchSection />

      {(!userInput || !searchSuggestions) && (
        <HelpText>
          <p>Are you looking for some fresh music recommendations?</p>
          <p>Well, you've come to the right place!</p>
          <p>Search for a song/artist you like to get recommendations :{')'}</p>
        </HelpText>
      )}
      <Suspense fallback={renderLoad()}>
        {chosenSuggestion && <SearchResult />}
      </Suspense>
    </Wrapper>
  );
};

export default Main;
