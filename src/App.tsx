import React, { useState } from "react";

import List from "./shared/List";
import Form from "./shared/Form";

import { useSearch } from "./hooks/search";
import Header from "./shared/Header";

function App() {
  const { search, isSearching, searchResults } = useSearch();
  const [location, setlocation] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlocation(e.target.value);
  };

  const handleSubmit = () => {
    search(location);
  };

  if (isSearching) return <Header>Loading...</Header>;

  return (
    <div style={{ maxWidth: 350, margin: "auto" }}>
      <Header>Yelp App</Header>
      <Form
        value={location}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        placeholder={"Where are you at?"}
      />
      {searchResults && <List listItems={searchResults} />}
    </div>
  );
}

export default App;
