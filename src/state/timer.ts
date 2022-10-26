import { makeAutoObservable } from "mobx";
interface TimerData {
  timer: number;
  isActive: boolean;
}

const defaultData: TimerData = { timer: 0, isActive: false };

class TimerStore {
  timer: number;
  isActive: boolean;

  constructor(values: TimerData) {
    makeAutoObservable(this);
    this.timer = values.timer;
    this.isActive = values.isActive;
  }

  setTimerData({ timer, isActive }: TimerData) {
    this.timer = timer;
    this.isActive = isActive;
  }
}

export const timerStore = new TimerStore(defaultData);
