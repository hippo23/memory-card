import "./ProgressBar";
import ProgressBar from "./ProgressBar";
import CardGrid from "./CardGrid";

const GameBar = () => {
  return (
    <div className="flex flex-col items-center justify-center row-span-4 bg-black flex-1 pb-10">
      <div className="flex justify-center items-center h-1/6 w-full bg-black">
        <ProgressBar></ProgressBar>
      </div>
      <CardGrid></CardGrid>
    </div>
  );
};

export default GameBar;
