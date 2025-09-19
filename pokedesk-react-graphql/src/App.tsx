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
import searchIcon from "./assets/search.svg";
import logo from "./assets/pokeball.svg";

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
    <div className={backgroundColor + " main-container"}>
      <section className="order-by-full body-3">
        <div className="order-by-container subtitle-2 ">
          <span className="order-by-title">Sort by:</span>
          <div className="order-by-selector body-3">
            <label htmlFor="order-id" onClick={() => setOrder_byAction("id")}>
              <input
                type="radio"
                onSelect={() => setOrder_byAction("id")}
                value="id"
                checked={order_by === "id"}
              />
              <span>Number</span>
            </label>
            <label
              htmlFor="order-name"
              onClick={() => setOrder_byAction("name")}
            >
              <input
                type="radio"
                onSelect={() => setOrder_byAction("name")}
                value="name"
                checked={order_by === "name"}
              />
              <span>Name</span>
            </label>
          </div>
        </div>
      </section>
      <div className="title-bar-container">
        <img src={logo} alt="Logo" className="app-logo" />
        <span className="headline">Pokédex</span>
      </div>
      <section className="search-bar-container">
        <div className="search-bar-base">
          <img
            src={searchIcon}
            alt="Search"
            className="search-bar-icon"
            onClick={() => document.getElementById("search")?.focus()}
          />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            className="search-bar-input body-3"
          />
        </div>
        <div className="sort_by-container">
          {order_by === "id" ? (
            <span>#</span>
          ) : (
            <span className="sort_by-underline">A</span>
          )}
        </div>
      </section>
      <div className="item-card-container">
        {pokemonList.map((pokemon) => (
          <div key={pokemon.id} className="item-card">
            <section className="item-id caption">
              {String(pokemon.id).replace(/\d+/, (match) => {
                return "#" + match.padStart(3, "0");
              })}
            </section>
            <img
              src={spritesData[pokemon.id - 1]}
              className="item-img"
              alt={pokemon.name}
            />
            <section className="item-name body-3">{pokemon.name}</section>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
