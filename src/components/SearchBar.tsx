import React, { useState } from "react";
import { searchPokemon } from "../searchPokemon";

interface Pokemon {
    name: string;
}

const SearchBar = () => {
  const [search, setSearch] = useState('')
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const onChangeHandler = (e: any) => {
    setSearch(e.target.value)
  }

  const searchPokemonClick = () => {
    onSearchHandler(search.toLowerCase())
  }
  
  const onSearchHandler = async (pokemon: any) => {
    const result = await searchPokemon(pokemon)
    setPokemon(result)
  }

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          placeholder="Buscar Pokemon"
          className="searchbar"
          onChange={onChangeHandler}
        />
          {search}
      </div>
      <div className="search-pokemon-btn-container">
        <button className="search-pokemon-btn" onClick={searchPokemonClick}>Buscar</button>
      </div>
      {pokemon ? (
        <div> {pokemon.name}</div>
      ) : null}
    </div>
  )
}

export default SearchBar
