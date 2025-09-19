import type { PokemonItem } from "../../core/types/pokemons-type";

interface PreviewProps {
    pokemon: PokemonItem
}

const Preview = ({ pokemon }: PreviewProps) => {
    
    return <div>Preview: {pokemon.name}</div>;
};

export default Preview;
