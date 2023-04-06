import "./ProgressBar";
import React from "react";
import ProgressBar from "./ProgressBar";
import CardGrid from "./CardGrid";
import RestartButton from "./../components/RestartButton";
import { gameStateContext } from "../App";

const GameBar = () => {
  const gameStateArray = React.useContext(gameStateContext);
  const gameStateValue = gameStateArray.gameState[0];

  return (
    <div className="flex flex-col items-center justify-center row-span-4 bg-inherit flex-1 pb-10">
      <div className="flex justify-center items-center h-1/6 w-full bg-inherit">
        <ProgressBar></ProgressBar>
      </div>
      {gameStateValue ? <CardGrid></CardGrid> : <RestartButton></RestartButton>}
    </div>
  );
};

export default GameBar;
