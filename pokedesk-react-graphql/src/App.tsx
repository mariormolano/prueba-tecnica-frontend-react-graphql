import { useEffect } from "react";
import "./App.css";
import { fetchPokemonList } from "./core/services/pokemon-serivce";
import { gql } from "@apollo/client";
import type { PokemonItem } from "./core/types/pokemons-type";
import { useSelector, useDispatch } from "react-redux";
import { type RootState, type AppDispatch } from "./core/stores/pokemon-store";
import {
  setPokemonList,
  setSpritesData,
  setOrder_by,
} from "./core/slices/pokemon-slice";

function App() {
  // Redux state and actions
  const order_by = useSelector((state: RootState) => state.pokemon.order_by);
  const pokemonList = useSelector(
    (state: RootState) => state.pokemon.pokemonList
  );
  const spritesData = useSelector(
    (state: RootState) => state.pokemon.spritesData
  );
  const dispatch = useDispatch<AppDispatch>();

  const backgroundColor = useSelector(
    (state: RootState) => state.pokemon.backgroundColor
  );

  const setPokemonListAction = (list: PokemonItem[]) =>
    dispatch(setPokemonList(list));
  const setSpritesDataAction = (data: string[]) =>
    dispatch(setSpritesData(data));
  const setOrder_byAction = (order: "name" | "id") =>
    dispatch(setOrder_by(order));

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
        const spritesData = data.species.map((pokemon: PokemonItem) => {
          const sprites =
            pokemon.pokemons[0].pokemonsprites[0].sprites.other[
              "official-artwork"
            ].front_default || "";
          return sprites;
        });
        console.log(spritesData);
        setSpritesDataAction(spritesData);
        setPokemonListAction(data.species);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [order_by]);

  return (
    <div className={backgroundColor}>
      <select
        name="order_by"
        id="order_by"
        value={order_by}
        onChange={(e) => setOrder_byAction(e.target.value as "name" | "id")}
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
    </div>
  );
}

export default App;
