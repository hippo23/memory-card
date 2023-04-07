import { pokemonContext, clickedPokemonsContext } from "../App";
import React from "react";

const ProgressBar = () => {
  const clickedPokemonsState = React.useContext(clickedPokemonsContext);
  const clickedPokemons = clickedPokemonsState.clickedPokemons[0];
  const pokemonsValue = React.useContext(pokemonContext).pokemons[0];
  return (
    <div className="w-1/2 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{
          width: `${(clickedPokemons.length / pokemonsValue.length) * 100}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
