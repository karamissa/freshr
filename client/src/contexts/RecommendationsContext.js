import { useState, useRef, createContext } from 'react';
import { debounce } from 'lodash';

export const RecommendationsContext = createContext();

const RecommendationsContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState(null);
  const [prevSearchSuggestions, setPrevSearchSuggestions] = useState({});
  const [searchResult, setSearchResult] = useState(null);

  // Check this: https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/
  const fetchSearchSuggestions = useRef(
    debounce(async (value) => {
      const res = await fetch(`http://localhost:5000/spotify/search/${value}`);
      const data = await res.json();

      console.log(data);

      setSearchSuggestions(data);
    }, 500)
  ).current;

  const sharedContext = {
    userInput,
    setUserInput,

    searchSuggestions,
    setSearchSuggestions,

    fetchSearchSuggestions,

    prevSearchSuggestions,
    setPrevSearchSuggestions,

    searchResult,
    setSearchResult
  };

  return (
    <RecommendationsContext.Provider value={sharedContext}>
      {children}
    </RecommendationsContext.Provider>
  );
};

export default RecommendationsContextProvider;
