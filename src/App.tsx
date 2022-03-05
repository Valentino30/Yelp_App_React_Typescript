import { useState } from "react";

import List from "./shared/List";

import { useSearch } from "./hooks/search";

function App() {
  const { search, isSearching, searchResults } = useSearch();
  const [location, setlocation] = useState("");

  const handleChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    setlocation(value);
  };

  const handleSubmit = () => {
    search(location);
  };

  if (isSearching) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Yelp App</h1>
      <form onSubmit={handleSubmit}>
        <input value={location} onChange={handleChange} />
      </form>
      {searchResults && <List listItems={searchResults} />}
    </div>
  );
}

export default App;
