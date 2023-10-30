import React, { useEffect, useState } from "react";
import { getAllPokemons, getPokemonData } from "../searchPokemon";
import Pokemon from "./Pokemon";

const Pokedex = () => {

    const [pokemons, setPokemon] = useState<any[]>([])
    const [searchTerm, setSearchTerm] = useState("");
    const [limit, setLimit] = useState(50);
    const [offset, setOffset] = useState(0);

    const getPokemons = async (newLimit: number, newOffset: number) => {
        try {
            const data = await getAllPokemons(newLimit, newOffset)
            const promises = data.results.map(async (pokemon: any) => {
                return await getPokemonData(pokemon.url)
            })

            const newPokemons  = await Promise.all(promises)
            setPokemon((prevPokemons) => [...prevPokemons, ...newPokemons]);
        } catch (error) {
            console.error('Error', error)
        }
    }

    const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const loadMorePokemons = () => {
        setLimit(limit + 20);
        setOffset(offset + 20);
    }

    useEffect(() => {
        getPokemons(limit, offset)
    }, [limit, offset])

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="Pesquisar Pokémon"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            {pokemons ?  (
                <div className="pokedex-grid">
                    {filteredPokemons.length === 0 ? (
                        <div>Nenhum resultado encontrado.</div>
                    ) : (
                        filteredPokemons.map((pokemon, index) => (
                            <Pokemon key={index} pokemon={pokemon} />
                        ))
                    )}
                </div>
            ) : 
            (<></>)}
            <button onClick={loadMorePokemons}>Ver Mais</button>
        </div>
    )
}

export default Pokedex