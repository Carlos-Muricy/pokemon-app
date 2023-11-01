import React from "react"
import { usePokemonContext } from "./PokemonContext"
import '../style/PokemonTeam.css'

const PokemonTeam = () => {
    const { pokemonTeam } = usePokemonContext();

    return(
        <div className="pokemon-team">
            {pokemonTeam.map((pokemonData, index) => (
                <div key={index} className={pokemonData.type}>
                    <div className="pokemon-container">{pokemonData.name}</div>
                    <img src={pokemonData.img} alt={pokemonData.name} className="pokemon-img" />
                </div>
            ))}
        </div>
    )
}

export default PokemonTeam