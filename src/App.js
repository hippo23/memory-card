import "./output.css";
import MenuBar from "./components/MenuBar";
import GameBar from "./components/GameBar";
import { fetchRandomPokemon } from "./logic/pokeAPI";
import React from "react";
import { useState, useEffect } from "react";

export const pokemonContext = React.createContext();
export const clickedPokemonsContext = React.createContext();

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [level, setLevel] = useState(0);

  const fetchPokemons = async () => {
    for (let i = 0; i < 3 + level * 3; i++) {
      const pokemonRaw = await fetchRandomPokemon();
      const pokemon = {
        name: pokemonRaw.name,
        image: pokemonRaw.sprites.front_default,
      };
      console.log(pokemon);
      setPokemons((pokemons) => [...pokemons, pokemon]);
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, [level]);

  useEffect(() => {
    console.log(clickedPokemons);
  }, [clickedPokemons]);

  return (
    <div className="grid grid-cols-1 grid-rows-6 w-screen h-auto min-h-screen bg-blackj">
      <MenuBar></MenuBar>
      <pokemonContext.Provider value={pokemons}>
        <clickedPokemonsContext.Provider
          value={{ clickedPokemons: [clickedPokemons, setClickedPokemons] }}
        >
          <GameBar></GameBar>
        </clickedPokemonsContext.Provider>
      </pokemonContext.Provider>
    </div>
  );
};

export default App;
