import { gql } from "@apollo/client";
import type { PokemonData, PokemonItem } from "../../core/types/pokemons-type";
import { pokemonPreviewData } from "../../core/services/pokemon-serivce";
import arrow from "../../assets/arrow_back.svg";
import pokeboll from "../../assets/pokeball.svg";
import chevron_right from "../../assets/chevron_right.svg";
import chevron_left from "../../assets/chevron_left.svg";
import Weight from "../../assets/Weight.svg";
import Height from "../../assets/Height.svg";
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
import ItemID from "../atoms/itemID";
import ItemName from "../atoms/itemName";

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
      //console.log(data.pokemon[0]);

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
      <div className="preview-pokeball-bg">
        <img src={pokeboll} alt="pokeball" />
      </div>
      <section className="preview-title-container">
        <div
          className="preview-title-pokemon"
          onClick={() => {
            setBackgroundColorAction("bg-identity");
            setActualPokemonAction(null);
          }}
        >
          <img src={arrow} alt="back" />
          <ItemName name={pokemon.name} className="headline" />
        </div>
        <ItemID id={pokemon.id} className="subtitle-2" />
      </section>
      <section className="preview-pokemon-navigation-image">
        <img
          src={chevron_left}
          alt="chevron_left"
          style={{
            visibility:
              pokemon.id !== pokemonList[0]?.id ? "visible" : "hidden",
          }}
          onClick={() => {
            const currentIndex = pokemonList.findIndex(
              (p) => p.id === pokemon.id
            );
            if (currentIndex > 0) {
              const previousPokemon = pokemonList[currentIndex - 1];
              setActualPokemonAction(previousPokemon);
            }
          }}
        />
        <img
          src={
            spritesData.find((sprite) => sprite.id === pokemon.id)?.url ?? ""
          }
          alt={pokemon.name}
          className="preview-pokemon-image"
        />
        <img
          src={chevron_right}
          alt="chevron_right"
          style={{
            visibility:
              pokemon.id !== pokemonList[pokemonList.length - 1]?.id
                ? "visible"
                : "hidden",
          }}
          onClick={() => {
            const currentIndex = pokemonList.findIndex(
              (p) => p.id === pokemon.id
            );
            if (currentIndex < pokemonList.length - 1) {
              const nextPokemon = pokemonList[currentIndex + 1];
              setActualPokemonAction(nextPokemon);
            }
          }}
        />
      </section>
      <section className="preview-pokemon-info">
        <div className="preview-pokemon-info-types">
          {pokemonData?.pokemontypes.map((type) => (
            <span
              key={type.type.name}
              className={`preview-pokemon-type-chip bg-${type.type.name} subtitle-2`}
            >
              {type.type.name.at(0)?.toUpperCase() + type.type.name.slice(1)}
            </span>
          ))}
        </div>
        <div>
          <span className={textColor + " subtitle-1"}>About</span>
        </div>
        <section className="preview-pokemon-info-about">
          <div className="separator-right">
            <div className="body-3 dataValue">
              <img src={Weight} alt="" />
              <span>{pokemonData?.weight} kg</span>
            </div>
            <div className="caption dataCaption">Weight</div>
          </div>
          <div>
            <div className="body-3 dataValue">
              <img src={Height} alt="" />
              <span>{pokemonData?.height} m</span>
            </div>
            <div className="caption dataCaption">Height</div>
          </div>
          <div className="separator-left">
            <div className="body-3 dataValue">
              {pokemonMoves[0]} <br /> {pokemonMoves[1]}{" "}
            </div>
            <div className="caption dataCaption">Moves</div>
          </div>
        </section>
        <section className="preview-pokemon-info-flavortext body-3">
          {pokemonData?.pokemonspecy?.pokemonspeciesflavortexts[0]?.flavor_text.replace(
            /[\f\n]/g,
            " "
          ) ?? ""}
        </section>
        <div>
          <span className={textColor + " subtitle-1"}>Base Stats</span>
        </div>
        <section className="preview-pokemon-info-stats">
          {pokemonData?.pokemonstats.map((stat) => (
            <div
              className="preview-pokemon-info-stats-row"
              key={stat.stat.name}
            >
              <div
                className={
                  textColor + " preview-pokemon-info-stats-row-name subtitle-3"
                }
              >
                {stat.stat.name === "hp"
                  ? "HP"
                  : stat.stat.name === "attack"
                  ? "ATK"
                  : stat.stat.name === "defense"
                  ? "DEF"
                  : stat.stat.name === "special-attack"
                  ? "SATK"
                  : stat.stat.name === "special-defense"
                  ? "SDEF"
                  : stat.stat.name === "speed"
                  ? "SPD"
                  : stat.stat.name}
              </div>
              <div className="preview-pokemon-info-stats-row-separator"></div>
              <div className="preview-pokemon-info-stats-row-value body-3">
                {String(stat.base_stat).replace(/\d+/, (match) => {
                  return match.padStart(3, "0");
                })}
              </div>
              <div
                className={
                  backgroundColor + " preview-pokemon-info-stats-row-bar"
                }
              >
                <div
                  className={
                    backgroundColor + " preview-pokemon-info-stats-row-bar-fill"
                  }
                  style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Preview;
