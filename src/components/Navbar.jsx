function Navbar({ pokemonIndex, setPokemonIndex, pokemonLength }) {
	/**
	 * Fonction classique
	 */
	function pokeNext() {
		setPokemonIndex(pokemonIndex + 1);
	}

	/**
	 * Fonction fléchée
	 */
	const pokePrev = () => {
		setPokemonIndex(pokemonIndex - 1);
	};

	return (
		<div>
			{/* Soluce 1 */}
			{pokemonIndex > 0 ? (
				<button onClick={pokePrev}>⬅️ Précédent</button>
			) : (
				""
			)}
			{pokemonIndex < pokemonLength ? (
				<button onClick={pokeNext}>Suivant ➡️</button>
			) : (
				""
			)}
			{/* 
				Soluce 2

				{pokemonIndex > 0 && (
					<button onClick={pokePrev}>⬅️ Précédent</button>
				)}
				{pokemonIndex < pokemonList.length - 1 && (
					<button onClick={pokeNext}>Suivant ➡️</button>
				)}
			
			*/}
		</div>
	);
}

export default Navbar;  