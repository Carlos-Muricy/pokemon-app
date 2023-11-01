import React from "react";

import { usePokemonContext } from "./PokemonContext"

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
        addPokemonToContext(pokemon.name, pokemon.sprites.front_default, pokemon.types[0].type.name);
    }

    return (
        <div className={pokemon?.types?.[0].type?.name}>
            <div className="pokemon-container">{pokemon?.name}</div>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} className="pokemon-img" />
            <button className="teste" onClick={addPokemonTeam}>Teste</button>
        </div>
    )
}

export default Pokemon  