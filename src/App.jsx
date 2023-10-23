import PokemonCard from "./components/PokemonCard";
import "./app.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";

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

function App() {

  let [pokemon, setPokemon] = useState(pokemonList[3])
  
 useEffect(
	()=>{alert("Hello, Pokemon trainer :)")},
	[]
);
	
return (
    <div>
		<div>
			<NavBar 
			pokemonList={pokemonList}
			pokemon={pokemon}
			setPokemon={setPokemon}/>
		</div>
		<div>
			<PokemonCard pokemon={pokemon}/>
		</div>
	</div>
);
}

export default App;