import type { PokemonItem, SpriteData } from "../../core/types/pokemons-type";
import ItemCard from "../molecules/itemCard";

interface ItemCardListProps {
  pokemonList: PokemonItem[];
  spritesData: SpriteData[];
}

const ItemCardList = ({ pokemonList, spritesData }: ItemCardListProps) => {
  return (
    <div className="item-card-container">
      {pokemonList.map((pokemon) => (
        <ItemCard pokemon={pokemon} spritesData={spritesData} />
      ))}
    </div>
  );
};
export default ItemCardList;
