import React, { useEffect, useState } from "react"
import "../style/PokeApp.css"
import { useParams } from "react-router-dom"
import { getPokemon } from "../searchPokemon"

function PokeApp()  {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<any>()

  const getPokemons = async (name: string | undefined) => {
    try {
      const data = await getPokemon(name)
      setPokemon(data)
      console.log('pokemon', data)
    } catch (error) {
      console.error("Error", error)
    }
  }

  useEffect(() => {
    getPokemons(name)
  }, [name])

  return (
    <div className="pokemon-page">
      <div>{name}</div>
      <img
          src={pokemon?.sprites?.other?.["official-artwork"]?.front_default}
          alt={pokemon?.name}
          className="pokemon-img"
        />
    </div>
  )
}

export default PokeApp
