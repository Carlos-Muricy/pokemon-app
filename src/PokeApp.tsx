import React from 'react';
import './style/PokeApp.css';
import Navbar from './components/Navbar';
import Pokedex from './components/Pokedex';

function PokeApp() {
  return (
    <div className="App">
      <Navbar/>
      <Pokedex/>
    </div>
  )
}

export default PokeApp;
