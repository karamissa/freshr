import { useState, useRef, createContext } from 'react';
import { debounce } from 'lodash';

export const RecommendationsContext = createContext();

const RecommendationsContextProvider = ({ children }) => {
  const [userInput, setUserInput] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState(null);
  const [prevSearchSuggestions, setPrevSearchSuggestions] = useState({});
  const [chosenSuggestion, setChosenSuggestion] = useState(null);

  // Check this: https://www.freecodecamp.org/news/debounce-and-throttle-in-react-with-hooks/
  const fetchSearchSuggestions = useRef(
    debounce(async (value) => {
      const res = await fetch(`http://localhost:5000/spotify/search/${value}`);
      const data = await res.json();

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

    chosenSuggestion,
    setChosenSuggestion
  };

  return (
    <RecommendationsContext.Provider value={sharedContext}>
      {children}
    </RecommendationsContext.Provider>
  );
};

export default RecommendationsContextProvider;
