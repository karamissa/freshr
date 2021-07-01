import { useEffect, useState } from 'react';
import debounce from '../utils/debounce';
import {
  Wrapper,
  Search,
  SearchBar,
  HelpText
} from '../styled-components/MainComponents';
import SearchWidget from './SearchWidget';

const Main = () => {
  const [userInput, setUserInput] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  const fetchSearchResults = debounce(async (value) => {
    const res = await fetch(`http://localhost:5000/spotify/search/${value}`);
    const data = await res.json();

    setSearchResults(data);
  });

  return (
    <Wrapper>
      <Search>
        <SearchBar
          placeholder="Search"
          value={userInput}
          onInput={(e) => {
            setUserInput(e.target.value);
            fetchSearchResults(userInput);
          }}
        />
        {searchResults && <SearchWidget searchResults={searchResults} />}
      </Search>

      {!searchResults && (
        <HelpText>
          <p>Are you looking for some fresh music recommendations?</p>
          <p>Well, you've come to the right place!</p>
          <p>Search for a song/artist you like to get recommendations :{')'}</p>
        </HelpText>
      )}
    </Wrapper>
  );
};

export default Main;
