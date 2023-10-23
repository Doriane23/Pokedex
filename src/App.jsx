/* eslint-disable react/jsx-key */
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";


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



function App(){

/*   const [pokemonIndex, setPokemonIndex] = useState(0); */

 /*  const handleClickPrevious = () => {
    setPokemonIndex(pokemonIndex - 1)
  }
  const handleClickNext = () => {
    setPokemonIndex(pokemonIndex + 1)
  }; */
  const [pokemonIndex, setPokemonIndex] = useState(0)
  
  const handleClick = (index) => {
    setPokemonIndex(index)
  }
  
return (
  <div>
	{pokemonList.map((pokemon, index) => (
	<NavBar pokemonName={pokemon.name} handleClick={()=> {handleClick(index)}}/>
  ))}
    <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
  </div>
  
);

}


export default App; 