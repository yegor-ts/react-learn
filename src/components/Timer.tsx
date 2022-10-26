import { observer } from "mobx-react";
import { useEffect } from "react";
import { timerStore } from "../state/timer";

import styles from "./Timer.module.css";

const Timer = observer(() => {
  const { timer, isActive } = timerStore;

  useEffect(() => {
    let interval: NodeJS.Timer = setInterval(() => {}, 0);

    if (isActive) {
      interval = setInterval(() => {
        timerStore.setTimerData({ isActive, timer: timer + 1 });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, timer]);

  return (
    <div className={styles.timer}>
      <h1>Timer: {isActive ? "Running" : "Stopped"}</h1>
      <div className={styles.digits}>
        <span className={styles.time}>
          {("0" + Math.floor((timer / 3600) % 24)).slice(-2)}:
        </span>
        <span className={styles.time}>
          {("0" + Math.floor((timer / 60) % 60)).slice(-2)}:
        </span>
        <span className={styles.time}>{("0" + (timer % 60)).slice(-2)}</span>
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.button}
          onClick={() =>
            timerStore.setTimerData({ timer: timer + 1, isActive: true })
          }
        >
          Start
        </button>
        <button
          className={styles.button}
          onClick={() => timerStore.setTimerData({ timer, isActive: false })}
        >
          Stop
        </button>

        <button
          className={styles.button}
          onClick={() => timerStore.setTimerData({ timer: 0, isActive })}
        >
          Clear
        </button>
      </div>
    </div>
  );
});

export default Timer;
