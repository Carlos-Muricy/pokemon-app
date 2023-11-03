import React from "react"
import "./style/PokeApp.css"
import Navbar from "./components/Navbar"
import Pokedex from "./components/Pokedex"
import PokemonTeam from "./components/PokemonTeam"

function PokeApp() {
  return (
    <div className="App">
      <Navbar />
      <PokemonTeam />
      <Pokedex />
    </div>
  )
}

export default PokeApp
