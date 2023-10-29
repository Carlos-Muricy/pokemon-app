import React, { useEffect, useState } from "react";
import { getAllPokemons } from "../searchPokemon";
import Pokemon from "./Pokemon";

const Pokedex = () => {

    const [loading, setLoading] = useState(false)
    const [pokemons, setPokemon] = useState([]);

    const getPokemons = async () => {
        try {
            setLoading(true)
            const result = await getAllPokemons()
            setPokemon(result.results)
            setLoading(false)
        } catch (error) {
            console.error('Error', error)
        }
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return (
        <div>
            {loading ? (<div>Carregando</div>) : 
            (<div className="pokedex-grid">
                {pokemons && pokemons?.map((pokemon, index) => {
                    return (
                        <Pokemon key={index} pokemon={pokemon}/>
                    )
                })}
            </div>) }
        </div>
    )
}

export default Pokedex