/* eslint-disable react/prop-types */
function NavBar({pokemonName, handleClick}) {
    return (
        <button key={pokemonName} onClick={handleClick}>
          {pokemonName}
        </button>
        );
      }

export default NavBar;