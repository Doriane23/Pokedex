import PropTypes from "prop-types";

// function PokemonCard({pokemon}){ 
    
//     return (
//    <figure>
//        {pokemon.imgSrc ? (<img src= {pokemon.imgSrc} alt ={pokemon.name} /> ) : ( <p> ??? </p>)}
//         <figcaption>{pokemon.name}</figcaption>
//     </figure>
//     )
// }

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.any.isRequired,
    })
}

function PokemonCard({ pokemon }) {
	return (
	<>
	<div>
		{pokemon.imgSrc ? <img src={pokemon.imgSrc}></img> : <p>???</p>}
		{<p>{pokemon.name}</p>}
		
	</div>
	{pokemon.name === "pikachu" ? (
		alert("pika pika !! PIKACHUUUUUUUUUUU")
		) : (
		<p></p>
		)}</>
	);
  }


export default PokemonCard;