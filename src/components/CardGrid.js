import GridCard from "./GridCard";
import { pokemonContext, levelContext } from "../App";
import React from "react";

const CardGrid = () => {
  const pokemonsValue = React.useContext(pokemonContext).pokemons[0];
  const level = React.useContext(levelContext).levelContextArray[0];
  const cards = pokemonsValue.map((pokemon, index) => (
    <GridCard key={index} name={pokemon.name} src={pokemon.image}></GridCard>
  ));
  return (
    <div className="flex items-center justify-center w-3/4 bg-black h-5/6">
      <div
        className={`grid gap-4 grid-rows-${
          level + 1
        } grid-cols-3 h-full w-full`}
      >
        {cards}
      </div>
    </div>
  );
};

export default CardGrid;
