import { useEffect, useState } from "react";
import "./App.css";
import { fetchPokemonList } from "./core/services/pokemon-serivce";
import { gql } from "@apollo/client";
import type { PokemonList } from "./core/types/pokemons-types";

function App() {
  const [order_by, setOrder_by] = useState<"name" | "id">("id");
  const [pokemonList, setPokemonList] = useState<PokemonList[]>([]);
  const [spritesData, setSpritesData] = useState<string[]>([]);

  // GraphQL query
  const POKEMON_LIST = gql`
    query samplePokeAPIquery {
      species: pokemonspecies(
        where: {id: {_lt: 1000}}
        order_by: { ${order_by}: asc }
      ) {
        name
        id
        pokemons {
          pokemonsprites {
            sprites
          }
        }
      }
    }
  `;

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPokemonList(POKEMON_LIST);
        const spritesData = data.species.map((pokemon: PokemonList) => {
          const sprites =
            pokemon.pokemons[0].pokemonsprites[0].sprites.other[
              "official-artwork"
            ].front_default || "";
          return sprites;
        });
        console.log(spritesData);
        setSpritesData(spritesData);
        setPokemonList(data.species);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [order_by]);

  return (
    <>
      <select
        name="order_by"
        id="order_by"
        value={order_by}
        onChange={(e) => setOrder_by(e.target.value as "name" | "id")}
      >
        <option value="id">ID</option>
        <option value="name">Name</option>
      </select>
      <ul>
        {pokemonList.map((pokemon) => (
          <li key={pokemon.id}>
            {pokemon.id} - {pokemon.name} <br />
            <img src={spritesData[pokemon.id]} alt={pokemon.name} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
