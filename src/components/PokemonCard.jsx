import App from "../App";

function PokemonCard(props) {
    const pokemon = pokemonList[0];
    console.log(props)

    return (
      <figure>
        {pokemon.imgSrc ? <img src= {pokemon.imgSrc} alt ={pokemon.name}/> : <p>???</p>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    )
}

export default PokemonCard;