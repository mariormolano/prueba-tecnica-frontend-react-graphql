import OrderByTitle from "../atoms/orderByTitle";
import OrderBySelector from "./orderBySelector";

interface OrderByModalProps {
  order_by: "name" | "id";
  setOrder_byAction: (order_by: "name" | "id") => void;
}

const OrderByModal = ({ order_by, setOrder_byAction }: OrderByModalProps) => {
  return (
    <div className="order-by-container subtitle-2 ">
      <OrderByTitle />
      <OrderBySelector
        order_by={order_by}
        setOrder_byAction={setOrder_byAction}
      />
    </div>
  );
};
export default OrderByModal;
