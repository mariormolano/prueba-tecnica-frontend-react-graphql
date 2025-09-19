interface OrderByRadioProps {
  order_by: "name" | "id";
  setOrder_by: (order_by: "name" | "id") => void;
  name: "name" | "id";
}

const OrderByRadio = ({ order_by, setOrder_by, name }: OrderByRadioProps) => {
  return (
    <label onClick={() => setOrder_by(name)}>
      <input
        type="radio"
        checked={order_by === name}
        onSelect={() => setOrder_by(name)}
        readOnly
      />
      <span>{name === "name" ? "Name" : "Number"}</span>
    </label>
  );
};
export default OrderByRadio;
