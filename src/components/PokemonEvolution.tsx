import React, { useEffect } from 'react'
import { getEvolution } from "../searchPokemon";

interface EvolutionProps {
    id: number
  }

const PokemonEvolution: React.FC<EvolutionProps> = ({id}) => {
    const getEvolutions = async (id: number | undefined) => {
        try {
          const data = await getEvolution(id);
          console.log("evolution", data);
        } catch (error) {
          console.error("Error", error);
        }
      };

      useEffect(() => {
        getEvolutions(id);
      }, [id]);
    
  return (
    <div>
      Teste
    </div>
  )
}

export default PokemonEvolution
