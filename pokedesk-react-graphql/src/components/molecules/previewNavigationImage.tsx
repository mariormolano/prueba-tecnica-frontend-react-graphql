import type { PokemonItem, SpriteData } from "../../core/types/pokemons-type";
import chevron_right from "../../assets/chevron_right.svg";
import chevron_left from "../../assets/chevron_left.svg";

interface PreviewNavigationImageProps {
  pokemon: PokemonItem;
  pokemonList: PokemonItem[];
  spritesData: SpriteData[];
  setActualPokemonAction: (pokemon: PokemonItem | null) => void;
}

const PreviewNavigationImage = ({
  pokemon,
  pokemonList,
  spritesData,
  setActualPokemonAction,
}: PreviewNavigationImageProps) => {
  return (
    <section className="preview-pokemon-navigation-image">
      <img
        src={chevron_left}
        alt="chevron_left"
        style={{
          visibility: pokemon.id !== pokemonList[0]?.id ? "visible" : "hidden",
        }}
        onClick={() => {
          const currentIndex = pokemonList.findIndex(
            (p) => p.id === pokemon.id
          );
          if (currentIndex > 0) {
            const previousPokemon = pokemonList[currentIndex - 1];
            setActualPokemonAction(previousPokemon);
          }
        }}
      />
      <img
        src={spritesData.find((sprite) => sprite.id === pokemon.id)?.url ?? ""}
        alt={pokemon.name}
        className="preview-pokemon-image"
      />
      <img
        src={chevron_right}
        alt="chevron_right"
        style={{
          visibility:
            pokemon.id !== pokemonList[pokemonList.length - 1]?.id
              ? "visible"
              : "hidden",
        }}
        onClick={() => {
          const currentIndex = pokemonList.findIndex(
            (p) => p.id === pokemon.id
          );
          if (currentIndex < pokemonList.length - 1) {
            const nextPokemon = pokemonList[currentIndex + 1];
            setActualPokemonAction(nextPokemon);
          }
        }}
      />
    </section>
  );
};

export default PreviewNavigationImage;
