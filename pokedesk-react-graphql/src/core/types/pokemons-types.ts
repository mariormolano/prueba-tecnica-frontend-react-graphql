// Types for the query response

interface sprites {
  other: {
    home: {
      front_shiny: string | null;
      front_female: string | null;
      front_default: string | null;
      front_shiny_female: string | null;
    };
    showdown: {
      back_shiny: string | null;
      back_female: string | null;
      front_shiny: string | null;
      back_default: string | null;
      front_female: string | null;
      front_default: string | null;
      back_shiny_female: string | null;
      front_shiny_female: string | null;
    };
    dream_world: {
      front_female: string | null;
      front_default: string | null;
    };
    "official-artwork": {
      front_shiny: string | null;
      front_default: string | null;
    };
  };
}

interface PokemonSprites {
  sprites: sprites;
}

interface Pokemons {
  pokemonsprites: PokemonSprites[];
}

export interface PokemonList {
  name: string;
  id: number;
  pokemons: Pokemons[];
}

export interface pokeAPIQueryResponse {
  species: PokemonList[];
}