import { Debris } from "./debris";
import { randomNum } from "../utils/randomNum";

export interface TrashDebris extends Debris {
  type: 'TRASH';
  value: number;
}

export const createTrashDebris = (debris: Debris): TrashDebris => ({
  ...debris,
  type: 'TRASH',
  radius: 10,
  vel: [debris.vel[0], 150],
  value: Math.floor(randomNum(0, 5))
})