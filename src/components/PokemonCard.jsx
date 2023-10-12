const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },
  ];

export default PokemonCard;

function PokemonCard() {
    const pokemon = pokemonList[0];
    return (
        <p>
            {pokemon === "pokemon.name" ? "pokemon.imgSrc" : "???"}
        </p>
    );
}