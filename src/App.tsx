import Battlefield from "./components/Battlefield";
import HeaderWithCounter from "./components/HeaderWithCounter";
import ResetButton from "./components/ResetButton";
import { useGameState } from "./state/useGameState";

import "./App.css";

const App = () => {
  const { attempt, clear, matrix, fire, won } = useGameState();

  if (won) alert("MOSCOW DOWN!");

  return (
    <div className="app">
      <HeaderWithCounter attempt={attempt} />
      <Battlefield matrix={matrix} onFire={fire} />
      <ResetButton clear={clear} />
    </div>
  );
};

export default App;
