import React from "react";

interface PokemonProps {
    pokemon: {
        name: string
    }    
}

const  Pokemon: React.FC<PokemonProps> = (
    {pokemon}
) => {

    return (
        <div>
            {pokemon?.name}
        </div>
    )
}

export default Pokemon  