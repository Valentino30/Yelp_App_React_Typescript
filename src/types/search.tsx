export type SearchResultType = {
  id: string;
  name: string;
};

export type SearchContextType = {
  isSearching: boolean;
  search: (location: string) => void;
  searchResults: SearchResultType[] | [];
};
