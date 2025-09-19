export const PokemonBgClass = {
  /* Identity */
  Identity: "bg-identity",

  /* Pokémon Types */
  bug: "bg-bug",
  dark: "bg-dark",
  dragon: "bg-dragon",
  electric: "bg-electric",
  fairy: "bg-fairy",
  fighting: "bg-fighting",
  fire: "bg-fire",
  flying: "bg-flying",
  ghost: "bg-ghost",
  normal: "bg-normal",
  grass: "bg-grass",
  ground: "bg-ground",
  ice: "bg-ice",
  poison: "bg-poison",
  psychic: "bg-psychic",
  rock: "bg-rock",
  steel: "bg-steel",
  water: "bg-water",
} as const;

export type PokemonBgClass =
  (typeof PokemonBgClass)[keyof typeof PokemonBgClass];

export const PokemonColorClass = {
  /* Identity */
  Identity: "cl-identity",

  /* Pokémon Types */
  bug: "cl-bug",
  dark: "cl-dark",
  dragon: "cl-dragon",
  electric: "cl-electric",
  fairy: "cl-fairy",
  fighting: "cl-fighting",
  fire: "cl-fire",
  flying: "cl-flying",
  ghost: "cl-ghost",
  normal: "cl-normal",
  grass: "cl-grass",
  ground: "cl-ground",
  ice: "cl-ice",
  poison: "cl-poison",
  psychic: "cl-psychic",
  rock: "cl-rock",
  steel: "cl-steel",
  water: "cl-water",
} as const;

export type PokemonColorClass =
  (typeof PokemonColorClass)[keyof typeof PokemonColorClass];
