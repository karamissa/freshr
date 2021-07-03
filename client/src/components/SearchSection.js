import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { RecommendationsContext } from '../contexts/RecommendationsContext';
import SearchWidget from './SearchWidget';

const Search = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.2em;
  font-size: 2em;
  color: var(--gray);
  background-color: transparent;
  border-bottom: 2px solid var(--gray);
  transition: border-bottom 0.4s ease-in-out;

  :focus {
    border-bottom: 2px solid var(--blue);
  }

  :focus::placeholder {
    color: transparent;
  }
`;

const SearchSection = () => {
  const {
    userInput,
    setUserInput,
    fetchSearchSuggestions,
    searchSuggestions,
    setSearchSuggestions
  } = useContext(RecommendationsContext);

  useEffect(() => {
    if (userInput) {
      fetchSearchSuggestions(userInput);
    } else {
      setSearchSuggestions(null);
      fetchSearchSuggestions.cancel();
    }
  }, [userInput, fetchSearchSuggestions, setSearchSuggestions]);

  return (
    <Search>
      <SearchBar
        placeholder="Search"
        value={userInput}
        onInput={(e) => {
          setUserInput(e.target.value);
        }}
      />
      {userInput && searchSuggestions && <SearchWidget />}
    </Search>
  );
};

export default SearchSection;
