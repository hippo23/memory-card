import GridCard from "./GridCard";
import { pokemonContext } from "../App";
import React from "react";

const CardGrid = () => {
  const pokemons = React.useContext(pokemonContext);
  const cards = pokemons.map((pokemon) => (
    <GridCard
      key={pokemon.name}
      name={pokemon.name}
      src={pokemon.image}
    ></GridCard>
  ));
  return (
    <div className="flex items-center justify-center w-3/4 bg-black h-5/6">
      <div className="grid gap-4 grid-rows-3 grid-cols-3 h-full w-full">
        {cards}
      </div>
    </div>
  );
};

export default CardGrid;
