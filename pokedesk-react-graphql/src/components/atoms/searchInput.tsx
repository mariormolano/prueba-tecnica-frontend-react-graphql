import { useEffect, useState } from "react";

interface SearchInputProps {
  setSearchAction: (search: string) => void;
  search: string;
}

const SearchInput = ({ setSearchAction, search }: SearchInputProps) => {
  const [searchValue, setSearchValue] = useState(search);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearchAction(searchValue);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchValue, setSearchAction]);

  return (
    <input
      type="text"
      name="search"
      id="search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      placeholder="Search"
      className="search-bar-input body-3"
    />
  );
};
export default SearchInput;
