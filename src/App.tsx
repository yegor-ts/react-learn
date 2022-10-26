import { useState } from "react";
import Timer from "./components/Timer";
import { TimerCtx, defaultValue } from "./state/timer";

import styles from "./App.module.css";

const App = () => {
  const [timer, setTimerData] = useState(defaultValue);

  return (
    <TimerCtx.Provider value={{ ...timer, setTimerData }}>
      <div className={styles.app}>
        <Timer />
      </div>
    </TimerCtx.Provider>
  );
};

export default App;
