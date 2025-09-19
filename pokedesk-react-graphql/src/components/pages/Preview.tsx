import { gql } from "@apollo/client";
import type { PokemonData, PokemonItem } from "../../core/types/pokemons-type";
import { pokemonPreviewData } from "../../core/services/pokemon-serivce";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  type RootState,
  type AppDispatch,
} from "../../core/stores/pokemon-store";

import {
  setBackgroundColor,
  setTextColor,
  setActualPokemon,
} from "../../core/slices/pokemon-slice";
import { PokemonBgClass, PokemonColorClass } from "../../core/types/color-type";
import PreviewPokeball from "../atoms/previewPokeboll";
import PreviewTitle from "../molecules/previewTitle";
import PreviewNavigationImage from "../molecules/previewNavigationImage";
import PreviewPokemonInfo from "../organisms/previewPokemonInfo";

interface PreviewProps {
  pokemon: PokemonItem;
}

const Preview = ({ pokemon }: PreviewProps) => {
  // State to hold the fetched Pokemon data
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [pokemonMoves, setPokemonMoves] = useState<string[]>([]);
  // Redux state and actions
  const backgroundColor = useSelector(
    (state: RootState) => state.pokemon.backgroundColor
  );
  const spritesData = useSelector(
    (state: RootState) => state.pokemon.spritesData
  );
  const pokemonList = useSelector(
    (state: RootState) => state.pokemon.pokemonList
  );

  const textColor = useSelector((state: RootState) => state.pokemon.textColor);

  const dispatch = useDispatch<AppDispatch>();
  const setBackgroundColorAction = (color: PokemonBgClass) =>
    dispatch(setBackgroundColor(color));
  const setColorAction = (color: PokemonColorClass) =>
    dispatch(setTextColor(color));
  const setActualPokemonAction = (pokemon: PokemonItem | null) =>
    dispatch(setActualPokemon(pokemon));

  // GraphQL query
  const POKEMON_PREVIEW = gql`
    query PokemonPreview {
      pokemon: pokemon(where: { id: { _eq: ${pokemon.id} } }) {
        name
        id
        pokemontypes {
          type {
            name
          }
        }
        weight
        height

				pokemonmoves(
					where: {move:{power: {_gt: 70}}}
					order_by: {move: {id:asc}}
					) {
					move{
						name
						power
						id
					}
				}

        pokemonabilities(order_by: { ability: { name: asc } }) {
          ability {
            name
          }
        }

        pokemonstats {
          base_stat
          stat {
            name
          }
        }

        pokemonspecy {
          pokemonspeciesflavortexts(
            where: { language_id: { _eq: 9 } }
            limit: 1
          ) {
            flavor_text
          }
        }
      }
    }
  `;
  useEffect(() => {
    const getData = async () => {
      const data = await pokemonPreviewData(POKEMON_PREVIEW);

      // Set background color based on primary type
      if (data.pokemon[0]) {
        setPokemonData(data.pokemon[0]);
        setBackgroundColorAction(
          PokemonBgClass[
            data.pokemon[0].pokemontypes[0].type
              .name as keyof typeof PokemonBgClass
          ]
        );
        setColorAction(
          PokemonColorClass[
            data.pokemon[0].pokemontypes[0].type
              .name as keyof typeof PokemonColorClass
          ]
        );
        if (data.pokemon[0].pokemonmoves.length > 0) {
          const moves = data.pokemon[0].pokemonmoves.map((pm) => pm.move.name);
          setPokemonMoves([...new Set(moves)]);
        }
      }
    };

    getData();
  }, [pokemon]);
  return (
    <div className="preview-container">
      <PreviewPokeball />
      <PreviewTitle
        pokemon={pokemon}
        setBackgroundColorAction={setBackgroundColorAction}
        setActualPokemonAction={setActualPokemonAction}
      />
      <PreviewNavigationImage
        pokemon={pokemon}
        pokemonList={pokemonList}
        spritesData={spritesData}
        setActualPokemonAction={setActualPokemonAction}
      />
      <PreviewPokemonInfo
        pokemonData={pokemonData}
        textColor={textColor}
        backgroundColor={backgroundColor}
        pokemonMoves={pokemonMoves}
      />
    </div>
  );
};

export default Preview;
