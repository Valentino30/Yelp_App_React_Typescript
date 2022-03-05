import { createContext, useContext, useState } from "react";

import { api } from "../api";
import { SearchContextType } from "../types/search";

const SearchContext = createContext({} as SearchContextType);

export const useSearch = () => {
  return useContext(SearchContext);
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const search = async (location: string) => {
    setIsSearching(true);
    try {
      const { businesses } = await api.get(
        "/businesses/search",
        `location=${location}`
      );
      setSearchResults(businesses);
      setIsSearching(false);
    } catch (error) {
      setIsSearching(false);
      alert("Oops! Something went wrong");
    }
  };

  return (
    <SearchContext.Provider value={{ search, isSearching, searchResults }}>
      {children}
    </SearchContext.Provider>
  );
};
