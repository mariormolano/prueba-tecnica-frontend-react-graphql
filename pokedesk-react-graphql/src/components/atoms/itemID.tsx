interface ItemIDProps {
  id: number;
  className?: string;
}

const ItemID = ({ id, className }: ItemIDProps) => {
  return (
    <section className={`item-id ${className ? className : "caption"}`}>
      {String(id).replace(/\d+/, (match) => {
        return "#" + match.padStart(3, "0");
      })}
    </section>
  );
};

export default ItemID;
