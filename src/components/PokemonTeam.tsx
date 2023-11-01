import React from "react"
import { usePokemonContext } from "./PokemonContext"

const PokemonTeam = () => {
    const { pokemonData } = usePokemonContext();
    const { name: pokemonName, img: pokemonImage, type: pokemonType } = pokemonData;

    return(
        <div className={pokemonType}>
            <div className="pokemon-container">{pokemonName}</div>
            <img src={pokemonImage} alt={pokemonName} className="pokemon-img" />
        </div>
    )
}

export default PokemonTeam