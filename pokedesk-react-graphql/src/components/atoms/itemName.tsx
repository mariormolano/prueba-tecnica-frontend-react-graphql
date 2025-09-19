interface ItemNameProps {
  name: string;
}

const ItemName = ({ name }: ItemNameProps) => {
  return <section className="item-name body-3">{name}</section>;
};

export default ItemName;
