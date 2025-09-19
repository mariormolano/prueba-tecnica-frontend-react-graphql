interface ItemIDProps {
  id: number;
}

const ItemID = ({ id }: ItemIDProps) => {
  return (
    <section className="item-id caption">
      {String(id).replace(/\d+/, (match) => {
        return "#" + match.padStart(3, "0");
      })}
    </section>
  );
};

export default ItemID;
