import SortBy from "../atoms/sortBy";
import SearchBase from "./searchBase";

interface SearchBarProps {
  order_by: "name" | "id";
  setOrderByModalOpen: (open: boolean) => void;
  setSearchAction: (search: string) => void;
  search: string;
}

const SearchBar = ({
  order_by,
  setOrderByModalOpen,
  setSearchAction,
  search,
}: SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <SearchBase setSearchAction={setSearchAction} search={search} />
      <SortBy order_by={order_by} setOrderByModalOpen={setOrderByModalOpen} />
    </div>
  );
};
export default SearchBar;
