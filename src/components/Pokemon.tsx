import React from "react";

interface PokemonProps {
    pokemon: {
        name: string
        sprites: {
            front_default: string
        }
        types: [{
            type: {
                name: string
            }
        }]
    }    
}

const  Pokemon: React.FC<PokemonProps> = (
    {pokemon}
) => {

    const teste = () => {
        console.log(pokemon)
    }

    return (
        <div className={pokemon?.types?.[0].type?.name}>
            <div className="pokemon-container">{pokemon?.name}</div>
            <img src={pokemon?.sprites?.front_default} alt={pokemon?.name} className="pokemon-img" />
            <button className="teste" onClick={teste}>Teste</button>
        </div>
    )
}

export default Pokemon  