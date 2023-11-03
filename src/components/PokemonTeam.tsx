import React from "react"
import { usePokemonContext } from "./PokemonContext"
import "../style/PokemonTeam.css"

const PokemonTeam = () => {
  const { pokemonTeam } = usePokemonContext()

  return (
    <div className="pokemon-team">
      {pokemonTeam.map((pokemonData, index) => (
        <div className="pokemon-chose" key={index}>
          <p className="pokemon-name">{pokemonData.name}</p>
          <div className={pokemonData.type}>
            <img
              src={pokemonData.img}
              alt={pokemonData.name}
              className="pokemon-img"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PokemonTeam
