import type { PokemonItem } from "../../core/types/pokemons-type";
import ItemID from "../atoms/itemID";
import ItemName from "../atoms/itemName";
import arrow from "../../assets/arrow_back.svg";
import type { PokemonBgClass } from "../../core/types/color-type";

interface PreviewTitleProps {
  pokemon: PokemonItem;
  setBackgroundColorAction: (color: PokemonBgClass) => void;
  setActualPokemonAction: (pokemon: PokemonItem | null) => void;
}

const PreviewTitle = ({ pokemon, setBackgroundColorAction, setActualPokemonAction }: PreviewTitleProps) => {
  return (
    <section className="preview-title-container">
      <div
        className="preview-title-pokemon"
        onClick={() => {
          setBackgroundColorAction("bg-identity");
          setActualPokemonAction(null);
        }}
      >
        <img src={arrow} alt="back" />
        <ItemName name={pokemon.name} className="headline" />
      </div>
      <ItemID id={pokemon.id} className="subtitle-2" />
    </section>
  );
};
export default PreviewTitle;
