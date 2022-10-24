import { createWarship } from "./../utils/battlefield";
import { createArray } from "../utils/array";
import { useState } from "react";
import { CellState } from "./cellstate";

const MAX_MATRIX_LENGTH = 10;

const createEmptyBattlefield = () =>
  createArray(MAX_MATRIX_LENGTH, () => createArray(MAX_MATRIX_LENGTH, () => 0));

const createBattlefield = () => {
  const emptyBattlefield = createEmptyBattlefield();
  const newWarship = createWarship(4, MAX_MATRIX_LENGTH);

  newWarship.forEach(({ x, y }) => {
    emptyBattlefield[x][y] = CellState.SHIP;
  });

  return emptyBattlefield;
};

export const useGameState = () => {
  const [state, setState] = useState({
    matrix: createBattlefield(),
    attempt: 0,
    won: false,
  });

  const clear = () =>
    setState({ ...state, matrix: createBattlefield(), attempt: 0 });

  const fire = (x: number, y: number) => {
    const cell = state.matrix[x][y];
    if (cell === CellState.CHECKED_WATER || cell === CellState.CHECKED_SHIP)
      return;

    const newState =
      cell === CellState.WATER
        ? CellState.CHECKED_WATER
        : CellState.CHECKED_SHIP;
    state.matrix[x][y] = newState;

    const won = state.matrix.every((row) =>
      row.every((x) => x !== CellState.SHIP)
    );

    setState({ ...state, attempt: state.attempt + 1, won });
  };

  const { matrix, attempt, won } = state;

  return {
    attempt,
    clear,
    matrix,
    fire,
    won,
  };
};
