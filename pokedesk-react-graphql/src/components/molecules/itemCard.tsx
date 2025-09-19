import { setActualPokemon } from "../../core/slices/pokemon-slice";
import type { PokemonItem, SpriteData } from "../../core/types/pokemons-type";
import ItemID from "../atoms/itemID";
import ItemImage from "../atoms/itemImage";
import ItemName from "../atoms/itemName";
import { useDispatch } from "react-redux";

interface ItemCardProps {
  pokemon: PokemonItem;
  spritesData: SpriteData[];
}

const ItemCard = ({ pokemon, spritesData }: ItemCardProps) => {
  const dispatch = useDispatch();
  const setActualPokemonAction = (pokemon: PokemonItem | null) =>
    dispatch(setActualPokemon(pokemon));
  return (
    <div className="item-card" onClick={() => setActualPokemonAction(pokemon)}>
      <ItemID id={pokemon.id} />
      <ItemImage
        src={spritesData.find((sprite) => sprite.id === pokemon.id)?.url ?? ""}
        alt={pokemon.name}
      />
      <ItemName name={pokemon.name} />
    </div>
  );
};
export default ItemCard;
