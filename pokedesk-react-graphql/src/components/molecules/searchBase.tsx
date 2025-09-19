import SearchIcon from "../atoms/searchIcon";
import SearchInput from "../atoms/searchInput";

const SearchBase = () => {
  return (
    <div className="search-bar-base">
      <SearchIcon />
      <SearchInput />
    </div>
  );
};
export default SearchBase;