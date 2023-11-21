// Importe as bibliotecas necessárias
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pokedex from "../components/Pokedex";

jest.mock("../searchPokemon", () => ({
  getAllPokemons: jest.fn(),
  getPokemonData: jest.fn(),
}));

describe("Pokedex Component", () => {
  it("renders without crashing", () => {
    render(<Pokedex />);
    expect(screen.getByText("Nenhum resultado encontrado.")).toBeInTheDocument();
  });

  it("loads more pokemons when 'Ver Mais' button is clicked", () => {
    render(<Pokedex />);
    const loadMoreButton = screen.getByText("Ver Mais");
    fireEvent.click(loadMoreButton);
  });

  it("filters pokemons based on search term", () => {
    render(<Pokedex />);
    const searchInput = screen.getByPlaceholderText("Pesquisar Pokémon");
    fireEvent.change(searchInput, { target: { value: "Pikachu" } });
  });
});
