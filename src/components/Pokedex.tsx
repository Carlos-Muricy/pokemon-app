import React, { useEffect, useState } from "react";
import { getAllPokemons, getPokemonData } from "../searchPokemon";
import Pokemon from "./Pokemon";

const Pokedex = () => {

    const [loading, setLoading] = useState(false)
    const [pokemons, setPokemon] = useState<any[]>([])
    const [searchTerm, setSearchTerm] = useState("");

    const getPokemons = async () => {
        try {
            setLoading(true)
            const data = await getAllPokemons()
            const promises = data.results.map(async (pokemon: any) => {
                return await getPokemonData(pokemon.url)
            })

            const results = await Promise.all(promises)
            setPokemon(results)
            setLoading(false)
        } catch (error) {
            console.error('Error', error)
        }
    }

    const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    useEffect(() => {
        getPokemons()
    }, [])


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
            {loading ? (
                <div>Carregando</div>
            ) : (
                <div className="pokedex-grid">
                    {filteredPokemons.length === 0 ? (
                        <div>Nenhum resultado encontrado.</div>
                    ) : (
                        filteredPokemons.map((pokemon, index) => (
                            <Pokemon key={index} pokemon={pokemon} />
                        ))
                    )}
                </div>
            )}
        </div>
    )
}

export default Pokedex