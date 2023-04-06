import { gameStateContext } from "../App";
import React from "react";

const RestartButton = () => {
  const gameStateArray = React.useContext(gameStateContext);
  const setGameState = gameStateArray.gameState[1];
  return (
    <button
      className="text-white bg-indigo-500 p-2.5 rounded-md min-w-[150px] hover:bg-indigo-400"
      onClick={() => {
        setGameState(true);
      }}
    >
      HATDOG
    </button>
  );
};

export default RestartButton;
