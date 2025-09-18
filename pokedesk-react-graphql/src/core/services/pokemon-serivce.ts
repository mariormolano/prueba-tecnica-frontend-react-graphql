import { type DocumentNode } from "@apollo/client";
import { pokeapiClient } from "../../config/pokeapi-client";
import type { pokeAPIQueryResponse } from "../types/pokemons-types";



// Service function to execute the query
export const fetchPokemonList = async (
  query: DocumentNode
): Promise<pokeAPIQueryResponse> => {
  try {
    const { data } = await pokeapiClient.query<pokeAPIQueryResponse>({
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
