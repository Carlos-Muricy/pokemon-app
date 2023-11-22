export const getAllPokemons = async (limit: number, offset: number) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error("erro", error)
  }
}

export const getPokemonData = async (url: string) => {
  try {
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error("erro", error)
  }
}

export const getPokemon = async (name: string | undefined ) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${name}`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error("erro", error)
  }
}

export const getEvolution = async (id: number | undefined ) => {
  try {
    let url = `https://pokeapi.co/api/v2/evolution-chain/${id}/`
    const response = await fetch(url)
    return await response.json()
  } catch (error) {
    console.error("erro", error)
  }
}
