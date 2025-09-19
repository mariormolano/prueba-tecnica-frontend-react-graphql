import OrderByRadio from "../atoms/orderByRadio";

interface OrderBySelectorProps {
  order_by: "name" | "id";
  setOrder_byAction: (order_by: "name" | "id") => void;
  onClick?: () => void;
}

const OrderBySelector = ({
  order_by,
  setOrder_byAction,
}: OrderBySelectorProps) => {
  return (
    <div className="order-by-selector body-3">
      <OrderByRadio
        order_by={order_by}
        setOrder_by={setOrder_byAction}
        name="name"
      />
      <OrderByRadio
        order_by={order_by}
        setOrder_by={setOrder_byAction}
        name="id"
      />
    </div>
  );
};
export default OrderBySelector;
