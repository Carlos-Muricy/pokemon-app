import React from "react"

import { usePokemonContext } from "./PokemonContext"
import { Link } from "react-router-dom"

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
  }

  return (
    <Link to={`pokemon/${pokemon?.name}`} className={pokemon?.types?.[0].type?.name}>
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
    </Link>
  )
}

export default Pokemon
