import React from "react"
import "../style/PokeApp.css"
import Pokedex from "../components/Pokedex"
import PokemonTeam from "../components/PokemonTeam"

function Home() {
  return (
    <div className="App">
      <div className="pokemon-app-middle">
        <div className="pokemon-title">
          POKEMON
        </div>
      <PokemonTeam />
      </div>
      <Pokedex />
    </div>
  )
}

export default Home
