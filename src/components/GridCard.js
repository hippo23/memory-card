import React from "react";
import {
  pokemonContext,
  clickedPokemonsContext,
  gameStateContext,
} from "../App";
import { shuffle } from "./../logic/algorithms";

const GridCard = (props) => {
  const pokemonsValue = React.useContext(pokemonContext).pokemons[0];
  const setPokemons = React.useContext(pokemonContext).pokemons[1];
  const clickedPokemonsState = React.useContext(clickedPokemonsContext);
  const gameStateArray = React.useContext(gameStateContext);
  const setGameState = gameStateArray.gameState[1];
  const clickedPokemons = clickedPokemonsState.clickedPokemons[0];
  const setClickedPokemons = clickedPokemonsState.clickedPokemons[1];
  return (
    <div
      name={props.name}
      onClick={(e) => {
        const name = e.currentTarget.getAttribute("name");

        if (!clickedPokemons.includes(name)) {
          setClickedPokemons((clickedPokemons) => [...clickedPokemons, name]);
          setPokemons(shuffle(pokemonsValue));
        } else {
          setGameState(false);
        }
      }}
      className="flex items-center justify-center bg-inherit rounded-md"
    >
      <img
        className="cursor-pointer transition ease-in-out hover:scale-125"
        src={props.src}
        alt="A pokemon"
      />
    </div>
  );
};

export default GridCard;
