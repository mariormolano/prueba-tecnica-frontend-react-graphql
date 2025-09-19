import SortBy from "../atoms/sortBy";
import SearchBase from "./searchBase";

interface SearchBarProps {
  order_by: "name" | "id";
  setOrderByModalOpen: (open: boolean) => void;
}

const SearchBar = ({ order_by, setOrderByModalOpen }: SearchBarProps) => {
  return (
    <div className="search-bar-container">
      <SearchBase />
      <SortBy order_by={order_by} setOrderByModalOpen={setOrderByModalOpen} />
    </div>
  );
};
export default SearchBar;
