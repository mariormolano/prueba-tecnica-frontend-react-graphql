import SearchIcon from "../atoms/searchIcon";
import SearchInput from "../atoms/searchInput";

interface SearchBaseProps {
  setSearchAction: (search: string) => void;
  search: string;
}

const SearchBase = ({ setSearchAction, search }: SearchBaseProps) => {
  return (
    <div className="search-bar-base">
      <SearchIcon />
      <SearchInput setSearchAction={setSearchAction} search={search} />
    </div>
  );
};
export default SearchBase;