import React, { createContext, useContext, useState, ReactNode } from "react";

const PokemonContext = createContext<{
  pokemonData: {
    name: string;
    img: string;
    type: string;
  };
  addPokemonToContext: (name: string, img: string, type: string) => void;
} | null>(null);

export function usePokemonContext() {
  const context = useContext(PokemonContext);
  if (context === null) {
    throw new Error("usePokemonContext must be used within a PokemonProvider");
  }
  return context;
}

interface PokemonProviderProps {
  children: ReactNode;
}

export function PokemonProvider({ children }: PokemonProviderProps) {
  const [pokemonData, setPokemonData] = useState({
    name: "",
    img: "",
    type: "",
  });

  const addPokemonToContext = (name: string, img: string, type: string) => {
    setPokemonData({ name, img, type });
  };

  return (
    <PokemonContext.Provider value={{ pokemonData, addPokemonToContext }}>
      {children}
    </PokemonContext.Provider>
  );
}