import "./output.css";
import MenuBar from "./components/MenuBar";
import GameBar from "./components/GameBar";

function App() {
  return (
    <div className="grid grid-cols-1 grid-rows-6 w-screen h-auto min-h-screen bg-blackj">
      <MenuBar></MenuBar>
      <GameBar></GameBar>
    </div>
  );
}

export default App;
