import React from 'react';
import './style/PokeApp.css';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';

function PokeApp() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
    </div>
  )
}

export default PokeApp;
