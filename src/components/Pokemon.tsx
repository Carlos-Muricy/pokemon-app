import React from "react";

import { usePokemonContext } from "./PokemonContext"

interface PokemonData {
    name: string;
    img: string;
    type: string;
} 

interface PokemonProps {
    pokemon: {
        name: string
        sprites: {
            front_default: string
        }
        types: [{
            type: {
                name: string
            }
        }]
    }    
}

const  Pokemon: React.FC<PokemonProps> = (
    {pokemon}
) => {
    const { addPokemonToContext } = usePokemonContext();

    const addPokemonTeam = () => {
        const pokemonData: PokemonData = {
          name: pokemon.name,
          img: pokemon.sprites.front_default,
          type: pokemon.types[0].type.name,
        };
        addPokemonToContext(pokemonData);
        console.log('pokemon', pokemon)
      };

    return (
        <div className={pokemon?.types?.[0].type?.name}>
            <div className="pokemon-container">{pokemon?.name}</div>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} className="pokemon-img" />
            <button className="teste" onClick={addPokemonTeam}>+ Team</button>
        </div>
    )
}

export default Pokemon  