import { useState } from "react";
import { toast } from "react-toastify";
import isAlpha from "validator/es/lib/isAlpha";

import List from "./shared/List";
import Form from "./shared/Form";
import Header from "./shared/Header";
import Wrapper from "./shared/Wrapper";

import { useSearch } from "./hooks/search";

function App() {
  const { search, isSearching, searchResults } = useSearch();
  const [location, setlocation] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlocation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAlpha(location)) {
      search(location);
    } else {
      toast.error("Please insert a valid location");
    }
  };

  if (isSearching) return <Header>Loading...</Header>;

  return (
    <Wrapper>
      <Header>Yelp App</Header>
      <Form
        value={location}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        placeholder={"Where are you at?"}
      />
      {searchResults && <List listItems={searchResults} />}
    </Wrapper>
  );
}

export default App;
