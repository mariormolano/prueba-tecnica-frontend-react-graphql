import type { PokemonData } from "../../core/types/pokemons-type";
import Weight from "../../assets/Weight.svg";
import Height from "../../assets/Height.svg";

interface PreviewPokemonInfoProps {
  pokemonData: PokemonData | null;
  textColor: string;
  backgroundColor: string;
  pokemonMoves: string[];
}

const PreviewPokemonInfo = ({
  pokemonData,
  textColor,
  backgroundColor,
  pokemonMoves,
}: PreviewPokemonInfoProps) => {
  return (
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
          <div className="preview-pokemon-info-stats-row" key={stat.stat.name}>
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
  );
};
export default PreviewPokemonInfo;
