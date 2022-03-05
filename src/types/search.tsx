export type SearchResultType = {
  id: string;
  url: string;
  name: string;
  alias: string;
  rating: number;
  image_url: string;
  review_count: number;
};

export type SearchContextType = {
  isSearching: boolean;
  search: (location: string) => void;
  searchResults: SearchResultType[] | [];
};
