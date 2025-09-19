import OrderByModal from "../molecules/orderByModal";

interface OrderByProps {
  setOrderByModalOpen: (open: boolean) => void;
  order_by: "name" | "id";
  setOrder_byAction: (order_by: "name" | "id") => void;
}

const OrderBy = ({
  setOrderByModalOpen,
  order_by,
  setOrder_byAction,
}: OrderByProps) => {
  return (
    <section
      className="order-by-full body-3"
      onClick={() => setOrderByModalOpen(false)}
    >
      <OrderByModal order_by={order_by} setOrder_byAction={setOrder_byAction} />
    </section>
  );
};

export default OrderBy;
