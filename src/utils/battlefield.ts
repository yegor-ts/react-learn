import { createArray } from "../utils/array";
import { getRandomInt } from "../utils/random";

interface Point {
  x: number;
  y: number;
}

export const createWarship = (shipLength: number, maxSize: number): Point[] => {
  const position = getRandomInt(0, 2) % 2 === 0 ? "horizontal" : "vertical";

  return position === "horizontal"
    ? createHorizontalWarship(shipLength, maxSize)
    : createVerticalWarship(shipLength, maxSize);
};

const createHorizontalWarship = (length: number, maxSize: number) => {
  const maxX = maxSize - length - 1;
  const maxY = maxSize - 1;

  const headX = getRandomInt(0, maxX);
  const headY = getRandomInt(0, maxY);

  return createArray(length, (i) => {
    return { x: headX + i, y: headY };
  });
};

const createVerticalWarship = (length: number, maxSize: number) => {
  const maxX = maxSize - 1;
  const maxY = maxSize - length - 1;

  const headX = getRandomInt(0, maxX);
  const headY = getRandomInt(0, maxY);

  return createArray(length, (i) => {
    return { x: headX, y: headY + i };
  });
};
