interface SortByProps {
  order_by: "name" | "id";
  setOrderByModalOpen: (open: boolean) => void;
}
const SortBy = ({ order_by, setOrderByModalOpen }: SortByProps) => {
  return (
    <div
      className="sort_by-container"
      onClick={() => setOrderByModalOpen(true)}
    >
      {order_by === "id" ? (
        <span>#</span>
      ) : (
        <span className="sort_by-underline">A</span>
      )}
    </div>
  );
};
export default SortBy;
