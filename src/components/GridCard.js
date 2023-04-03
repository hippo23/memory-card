import { fetchRandomPokemon } from "./../logic/pokeAPI";
import React, { useState, useEffect } from "react";

const GridCard = (props) => {
  return (
    <div className="bg-white rounded-md">
      <img className="h-full w-full rounded-md" src={props.url} />
    </div>
  );
};

export default GridCard;
