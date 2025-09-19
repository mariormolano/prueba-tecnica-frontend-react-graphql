import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { PokemonItem, SpriteData } from "../types/pokemons-type";
import type { PokemonBgClass, PokemonColorClass } from "../types/color-type";

interface PokemonState {
  pokemonList: PokemonItem[];
  actualPokemon: PokemonItem | null;
  spritesData: SpriteData[];
  backgroundColor: string;
  textColor: string;
  order_by: "name" | "id";
  search: string;
}

const initialState: PokemonState = {
  pokemonList: [],
  actualPokemon: null,
  spritesData: [],
  backgroundColor: "bg-identity",
  textColor: "cl-identity",
  order_by: "id",
  search: "",
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action: PayloadAction<PokemonItem[]>) => {
      state.pokemonList = action.payload;
    },
    setSpritesData: (state, action: PayloadAction<SpriteData[]>) => {
      state.spritesData = action.payload;
    },
    setBackgroundColor: (state, action: PayloadAction<PokemonBgClass>) => {
      state.backgroundColor = String(action.payload);
    },
    setTextColor: (state, action: PayloadAction<PokemonColorClass>) => {
      state.textColor = String(action.payload);
    },
    setActualPokemon: (state, action: PayloadAction<PokemonItem | null>) => {
      state.actualPokemon = action.payload;
    },
    setOrder_by: (state, action: PayloadAction<"name" | "id">) => {
      state.order_by = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const {
  setPokemonList,
  setActualPokemon,
  setSpritesData,
  setBackgroundColor,
  setTextColor,
  setOrder_by,
  setSearch,
} = pokemonSlice.actions;
export default pokemonSlice.reducer;
