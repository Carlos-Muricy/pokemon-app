import React, { useEffect, useState } from "react";
import "../style/PokeApp.css";
import { useParams } from "react-router-dom";
import { getPokemon } from "../searchPokemon";
import "../style/PokemonPage.css";
// import PokemonEvolution from "../components/PokemonEvolution";

function PokeApp() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<any>();

  const getPokemons = async (name: string | undefined) => {
    try {
      const data = await getPokemon(name);
      setPokemon(data);
      console.log("pokemon", data);
    } catch (error) {
      console.error("Error", error);
    }
  };

  useEffect(() => {
    getPokemons(name);
  }, [name]);

  return (
    <div className="pokemon-page">
      <div className="pokemon-page-name">{name}</div>
      {/* <PokemonEvolution id={pokemon?.id}/> */}
      <img
        src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
        alt={pokemon?.name}
        className="pokemon-page-img"
      />
      <div className="pokemon-page-content">
      <div className="pokemon-page-types">
          Type:
          <div className="pokemon-types">
            {pokemon?.types.map((types: any, index: number) => (
              <div key={index}>{types.type.name}</div>
            ))}
          </div>
        </div>
        <div className="pokemon-page-abilities">
          Abilities:
          <div className="pokemon-abilities">
            {pokemon?.abilities.map((abilities: any, index: number) => (
              <div key={index}>{abilities.ability.name}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="pokemon-page-moves">
        Moves:
        <div className="pokemon-moves">
          {pokemon?.moves.map((moves: any, index: number) => (
            <div key={index}>{moves.move.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokeApp;
