import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import PokeApp from './PokeApp';
import reportWebVitals from './reportWebVitals';
import { PokemonProvider } from './components/PokemonContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PokemonProvider>
    <PokeApp />
  </PokemonProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
