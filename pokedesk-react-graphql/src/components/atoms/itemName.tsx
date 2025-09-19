interface ItemNameProps {
  name: string;
  className?: string;
}

const ItemName = ({ name, className }: ItemNameProps) => {
  return (
    <section className={`item-name ${className ? className : "body-3"}`}>
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </section>
  );
};

export default ItemName;
