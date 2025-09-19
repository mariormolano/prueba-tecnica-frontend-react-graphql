interface ItemImageProps {
  src: string;
  alt: string;
}

const ItemImage = ({ src, alt }: ItemImageProps) => {
  return <img src={src} alt={alt} className="item-img" />;
};
export default ItemImage;
