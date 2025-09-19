import { type DocumentNode } from "@apollo/client";
import { pokeapiClient } from "../../config/pokeapi-client";
import type { fetchPokemonListResponse } from "../types/pokemons-type";

// Service function to execute the query
export const fetchPokemonList = async (
  query: DocumentNode
): Promise<fetchPokemonListResponse> => {
  try {
    const { data } = await pokeapiClient.query<fetchPokemonListResponse>({
      query: query,
    });
    if (!data) {
      throw new Error("No data received from GraphQL query");
    }
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};

export const pokemonPreviewData = async (
  query: DocumentNode
): Promise<fetchPokemonListResponse> => {
  try {
    const { data } = await pokeapiClient.query<fetchPokemonListResponse>({
      query: query,
    });
    if (!data) {
      throw new Error("No data received from GraphQL query");
    }
    return data;
  } catch (error) {
    console.error("Error fetching Pokemon data:", error);
    throw error;
  }
};
