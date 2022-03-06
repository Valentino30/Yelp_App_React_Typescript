import { useState } from "react";

import List from "./shared/List";
import Form from "./shared/Form";
import Header from "./shared/Header";
import Wrapper from "./shared/Wrapper";

import { useSearch } from "./hooks/search";
import { toast } from "react-toastify";
import Text from "./shared/Text";

function App() {
  const { search, isSearching, searchResults } = useSearch();
  const [location, setlocation] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlocation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!location) return toast.error("Please insert a valid location");
    search(location);
  };

  if (isSearching) return <Header>Fetching listings in your area...</Header>;

  return (
    <Wrapper>
      <Header>Yelp App</Header>
      <Text>Find the top 20 listings in your area!</Text>
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
