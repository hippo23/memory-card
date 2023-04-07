import "./output.css";
import MenuBar from "./components/MenuBar";
import GameBar from "./components/GameBar";
import React from "react";
import { fetchRandomPokemon } from "./logic/pokeAPI";
import { useState, useEffect } from "react";

export const pokemonContext = React.createContext();
export const clickedPokemonsContext = React.createContext();
export const gameStateContext = React.createContext();
export const levelContext = React.createContext();

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [level, setLevel] = useState(0);
  const [gameState, setGameState] = useState(true);

  const fetchPokemons = async () => {
    setPokemons([]);
    setClickedPokemons([]);
    let tempPokemons = [];
    for (let i = 0; i < 3 + level * 3; i++) {
      const pokemonRaw = await fetchRandomPokemon();
      const pokemon = {
        name: pokemonRaw.name,
        image: pokemonRaw.sprites.front_default,
      };
      if (
        i === 0 ||
        !tempPokemons.some((e) => {
          return e === pokemon.name;
        })
      ) {
        setPokemons((pokemons) => [...pokemons, pokemon]);
        tempPokemons.push(pokemon.name);
      } else {
        i--;
      }
    }
  };

  useEffect(() => {
    if (clickedPokemons.length === 3 + level * 3) setLevel(level + 1);
  }, [clickedPokemons]);

  useEffect(() => {
    if (gameState) fetchPokemons();
  }, [level, gameState]);

  useEffect(() => {}, [clickedPokemons]);

  return (
    <div
      className={`w-screen h-auto min-h-screen bg-black grid grid-cols-1 grid-rows-6`}
    >
      <MenuBar></MenuBar>
      <pokemonContext.Provider value={{ pokemons: [pokemons, setPokemons] }}>
        <clickedPokemonsContext.Provider
          value={{ clickedPokemons: [clickedPokemons, setClickedPokemons] }}
        >
          <gameStateContext.Provider
            value={{ gameState: [gameState, setGameState] }}
          >
            <levelContext.Provider
              value={{ levelContextArray: [level, setLevel] }}
            >
              <GameBar></GameBar>
            </levelContext.Provider>
          </gameStateContext.Provider>
        </clickedPokemonsContext.Provider>
      </pokemonContext.Provider>
    </div>
  );
};

export default App;
