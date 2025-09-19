import SearchBar from "../molecules/searchBar";
import TitleBar from "../molecules/titleBar";
import ItemCardList from "../organisms/itemCardList";
import OrderBy from "../organisms/orderBy";
import { setOrder_by } from "../../core/slices/pokemon-slice";
import { useEffect } from "react";
import { fetchPokemonList } from "../../core/services/pokemon-serivce";
import { gql } from "@apollo/client";
import type { PokemonItem, SpriteData } from "../../core/types/pokemons-type";
import { useSelector, useDispatch } from "react-redux";
import {
  type RootState,
  type AppDispatch,
} from "../../core/stores/pokemon-store";
import {
  setPokemonList,
  setSpritesData,
  setSearch,
} from "../../core/slices/pokemon-slice";

interface HomeProps {
  orderByModalOpen: boolean;
  setOrderByModalOpen: (open: boolean) => void;
}

const Home = ({ orderByModalOpen, setOrderByModalOpen }: HomeProps) => {
  // Redux state and actions
  const order_by = useSelector((state: RootState) => state.pokemon.order_by);
  const pokemonList = useSelector(
    (state: RootState) => state.pokemon.pokemonList
  );
  const spritesData = useSelector(
    (state: RootState) => state.pokemon.spritesData
  );
  const search = useSelector((state: RootState) => state.pokemon.search);
  const dispatch = useDispatch<AppDispatch>();

  const setPokemonListAction = (list: PokemonItem[]) =>
    dispatch(setPokemonList(list));
  const setSpritesDataAction = (data: SpriteData[]) =>
    dispatch(setSpritesData(data));
  const setOrder_byAction = (order: "name" | "id") =>
    dispatch(setOrder_by(order));
  const setSearchAction = (search: string) => dispatch(setSearch(search));

  const searchWhere = `where: {_and: [
      {id: {_lt: 1000}}
      {name: {_ilike: "%${search}%" } }
      ]}`;

  const noSearch = `where: {id: {_lt: 1000}}`;

  // GraphQL query
  const POKEMON_LIST = gql`
    query PokemonList {
      species: pokemonspecies(
        ${search ? searchWhere : noSearch}
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
      const data = await fetchPokemonList(POKEMON_LIST);
      const spritesData = data.species.map((pokemon: PokemonItem) => {
        const sprites = {
          url: pokemon.pokemons[0].pokemonsprites[0].sprites.other[
            "official-artwork"
          ].front_default,
          id: pokemon.id || 0,
        };
        return sprites;
      });
      setSpritesDataAction(spritesData);
      setPokemonListAction(data.species);
    };

    getData();
    setOrderByModalOpen(false);
  }, [order_by, search]);

  return (
    <>
      {orderByModalOpen && (
        <OrderBy
          setOrderByModalOpen={setOrderByModalOpen}
          order_by={order_by}
          setOrder_byAction={setOrder_byAction}
        />
      )}
      <TitleBar />
      <SearchBar
        order_by={order_by}
        setOrderByModalOpen={setOrderByModalOpen}
        setSearchAction={setSearchAction}
        search={search}
      />
      <ItemCardList pokemonList={pokemonList} spritesData={spritesData} />
    </>
  );
};

export default Home;
