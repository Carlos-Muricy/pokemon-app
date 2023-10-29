import React from 'react';
import './style/PokeApp.css';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';

function PokeApp() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Pokedex/>
    </div>
  )
}

export default PokeApp;
