import { createContext, useContext, useState } from "react";

import { api, handleSearchError } from "../api";
import { SearchContextType } from "../types/search";

// FEEDBACK
// In this case using as is not optimal as it doesn't ensure that your object will be of type SearchContextType
// It could indeed be an empty object
const SearchContext = createContext({} as SearchContextType);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  // FEEDBACK
  // Here you could merge the two states in one for two reasons
  // 1. It would simplify and dry the code
  // 2. More importantly it would tie up the two states
  // which would avoid situations where you update one state but forget to update the other one
  // Here is how you could merge them: {isSearching: true} | {isSearching: true, searchResults: []}
  // If isSearching: true you know that no results will be needed in the state as they won't be displayed
  // If isSearching: false you know that results will be needed in the state as they will be displayed
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const search = async (location: string) => {
    setIsSearching(true);
    try {
      // FEEDBACK
      // It would have been better to create a specific controller like getBusinesses() instead of a generic api.get()
      // And once the app expanded and you found yourself repeating the axios block code
      // Separate the axios logic from the endpoint specific controller
      const { businesses } = await api.get(
        "/businesses/search",
        `location=${location}`
      );
      setSearchResults(businesses);
      setIsSearching(false);
    } catch (error) {
      setSearchResults([]);
      setIsSearching(false);
      handleSearchError(error);
    }
  };

  return (
    <SearchContext.Provider value={{ search, isSearching, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
