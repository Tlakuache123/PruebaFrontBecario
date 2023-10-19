import { Input } from "@chakra-ui/react";
import { characterBag } from "../store";

const SearchBar = () => {
  const [input, setInput] = characterBag((state) => [
    state.searchPersonaje,
    state.setSearchPersonaje,
  ]);

  return (
    <Input
      size="md"
      placeholder="Search character..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default SearchBar;
