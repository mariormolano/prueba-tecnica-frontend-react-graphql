export const PokemonBgClass = {
  /* Identity */
  Identity: "bg-identity",

  /* Pokémon Types */
  Bug: "bg-bug",
  Dark: "bg-dark",
  Dragon: "bg-dragon",
  Electric: "bg-electric",
  Fairy: "bg-fairy",
  Fighting: "bg-fighting",
  Fire: "bg-fire",
  Flying: "bg-flying",
  Ghost: "bg-ghost",
  Normal: "bg-normal",
  Grass: "bg-grass",
  Ground: "bg-ground",
  Ice: "bg-ice",
  Poison: "bg-poison",
  Psychic: "bg-psychic",
  Rock: "bg-rock",
  Steel: "bg-steel",
  Water: "bg-water",
} as const;

export type PokemonBgClass = typeof PokemonBgClass[keyof typeof PokemonBgClass];
