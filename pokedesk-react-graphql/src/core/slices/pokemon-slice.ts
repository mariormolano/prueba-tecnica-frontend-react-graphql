import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PokemonItem } from "../types/pokemons-type";
import type { PokemonBgClass } from "../types/background-type";

interface PokemonState {
  pokemonList: PokemonItem[];
  actualPokemon?: PokemonItem;
  spritesData: string[];
  backgroundColor: string;
  order_by: "name" | "id";
}

const initialState: PokemonState = {
  pokemonList: [],
  actualPokemon: undefined,
  spritesData: [],
  backgroundColor: "bg-identity",
  order_by: "id",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<PokemonItem[]>) => {
      state.pokemonList = action.payload;
    },
    setSpritesData: (state, action: PayloadAction<string[]>) => {
      state.spritesData = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<PokemonBgClass>) => {
      state.backgroundColor = String(action.payload);
    },
    setActualPokemon: (state, action: PayloadAction<PokemonItem>) => {
      state.actualPokemon = action.payload;
    },
    setOrder_by: (state, action: PayloadAction<"name" | "id">) => {
      state.order_by = action.payload;
    },
  },
});

export const {
  setPokemonList,
  setActualPokemon,
  setSpritesData,
  setBackgroundColor,
  setOrder_by,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
