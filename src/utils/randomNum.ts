export const randomNum = (min: number, max: number): number =>
  Math.random() * (max - min + 1) + min;