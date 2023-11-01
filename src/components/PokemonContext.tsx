import React, { createContext, useContext, useState, ReactNode } from "react";

interface PokemonData {
    name: string;
    img: string;
    type: string;
}

const PokemonContext = createContext<{
    pokemonTeam: PokemonData[];
    addPokemonToContext: (pokemon: PokemonData) => void;
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
    const [pokemonTeam, setPokemonTeam] = useState<PokemonData[]>([]);

    const addPokemonToContext = (pokemon: PokemonData) => {
        if (pokemonTeam.length < 6) {
          setPokemonTeam((prevTeam) => [...prevTeam, pokemon]);
        }
      };

  return (
    <PokemonContext.Provider value={{ pokemonTeam, addPokemonToContext }}>
      {children}
    </PokemonContext.Provider>
  );    
}