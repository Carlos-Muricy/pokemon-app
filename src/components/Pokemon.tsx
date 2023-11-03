import React from "react"

import { usePokemonContext } from "./PokemonContext"

interface PokemonData {
  name: string
  img: string
  type: string
}

interface PokemonProps {
  pokemon: {
    name: string
    sprites: {
      front_default: string
      other: {
        "official-artwork": {
          front_default: string
        }
      }
    }
    types: [
      {
        type: {
          name: string
        }
      }
    ]
  }
}

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
  const { addPokemonToContext } = usePokemonContext()

  const addPokemonTeam = () => {
    const pokemonData: PokemonData = {
      name: pokemon.name,
      img: pokemon.sprites.other["official-artwork"].front_default,
      type: pokemon.types[0].type.name,
    }
    addPokemonToContext(pokemonData)
    console.log("pokemon", pokemon)
  }

  return (
    <div className={pokemon?.types?.[0].type?.name}>
      <img
        src={pokemon?.sprites?.front_default}
        alt={pokemon?.name}
        className="pokemon-img"
      />
      <div className="pokemon-content">
        <div className="pokemon-name">{pokemon?.name}</div>
        <button className="chose-pokemon-btn" onClick={addPokemonTeam}>
          Add
        </button>
      </div>
    </div>
  )
}

export default Pokemon
