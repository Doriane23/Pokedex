import PropTypes from "prop-types";

function Navbar({ setPokemonIndex, pokemonList }) {

	const pokeClick = (index) => {
		setPokemonIndex(index)
	}

	return (
		<div>
			{pokemonList.map((pokemon, index) => (
				<button key={index} onClick={() => pokeClick(index)}>{pokemon.name}</button>
			))}
		</div>
	);
}

Navbar.propTypes = {
	setPokemonIndex: PropTypes.func.isRequired,
	pokemonList: PropTypes.array.isRequired
}

export default Navbar;