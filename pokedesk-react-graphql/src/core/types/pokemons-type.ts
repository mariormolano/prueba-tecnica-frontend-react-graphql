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

export interface PokemonItem {
  name: string;
  id: number;
  pokemons: Pokemons[];
}

export interface SpriteData {
  url: string | null;
  id: number;
}

export interface fetchPokemonListResponse {
  species: PokemonItem[];
}

export interface pokemonPreviewDataResponse {
  pokemon: PokemonData[];
}

export interface PokemonData {
  name: string;
  id: number;
  pokemontypes: Pokemontype[];
  weight: number;
  height: number;
  pokemonmoves: Pokemonmoves[]
  pokemonabilities: Pokemonability[];
  pokemonstats: Pokemonstat[];
  pokemonspecy: Pokemonspecy;
}

export interface Pokemontype {
  type: Type;
}

export interface Type {
  name: string;
}

export interface Pokemonmoves {
  move: Move
}

export interface Move {
  name: string
  power: number
  id: number
}
export interface Pokemonability {
  ability: Ability;
}

export interface Ability {
  name: string;
}

export interface Pokemonstat {
  base_stat: number;
  stat: Stat;
}

export interface Stat {
  name: string;
}

export interface Pokemonspecy {
  pokemonspeciesflavortexts: Pokemonspeciesflavortext[];
}

export interface Pokemonspeciesflavortext {
  flavor_text: string;
}
