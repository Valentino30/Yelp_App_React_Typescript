import React, { useState } from "react";

import List from "./shared/List";
import Form from "./shared/Form";

import { useSearch } from "./hooks/search";

function App() {
  const { search, isSearching, searchResults } = useSearch();
  const [location, setlocation] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlocation(e.target.value);
  };

  const handleSubmit = () => {
    search(location);
  };

  if (isSearching) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>Yelp App</h1>
      <Form
        value={location}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {searchResults && <List listItems={searchResults} />}
    </div>
  );
}

export default App;
