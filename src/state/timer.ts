import { createContext } from "react";

interface TimerData {
  timer: number;
  isActive: boolean;
}

interface TimerState extends TimerData {
  setTimerData: (data: TimerData) => void;
}

export const defaultValue: TimerData = { timer: 0, isActive: false };
export const TimerCtx = createContext<TimerState>({
  ...defaultValue,
  setTimerData: () => {},
});
