import { useState } from "react";
import PokemonCard from "./components/PokemonCard";

function App() {
  const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      },
      {
        name: "charmander",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
      },
      {
        name: "squirtle",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      },
      {
        name: "pikachu",
        imgSrc:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      },
      {
        name: "mew",
      },
  ];


 // fonction classique

  function pokeNext() {
    setPokemonIndex(pokemonIndex +1);
  }
  // fonction fléchée
    const pokePrev = () => {
      setPokemonIndex(pokemonIndex -1)
    }

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {pokemonIndex > 0 ? (
          <button onclick={pokePrev}>Précédent</button>
        ) : (
          ""
        )}
        {pokemonIndex < pokemonList.length - 1 ? (
          <button onclick={pokeNext}>Suivant</button>
        ) : (
          ""
        )
        }
    </>
  );
}

export default App;