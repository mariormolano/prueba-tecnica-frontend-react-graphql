import { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { type RootState } from "./core/stores/pokemon-store";

import Home from "./components/pages/Home";
import Preview from "./components/pages/Preview";

function App() {
  const [orderByModalOpen, setOrderByModalOpen] = useState(false);

  // Redux state and actions

  const actualPokemon = useSelector(
    (state: RootState) => state.pokemon.actualPokemon
  );
  const backgroundColor = useSelector(
    (state: RootState) => state.pokemon.backgroundColor
  );

  return (
    <div className={backgroundColor + " main-container"}>
      {actualPokemon ? (
        <Preview pokemon={actualPokemon} />
      ) : (
        <Home
          orderByModalOpen={orderByModalOpen}
          setOrderByModalOpen={setOrderByModalOpen}
        />
      )}
    </div>
  );
}

export default App;
