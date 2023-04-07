import React from "react";
import { clickedPokemonsContext, gameStateContext } from "../App";

const GridCard = (props) => {
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
