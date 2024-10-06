import { Debris } from "./debris";
import { randomNum } from "../utils/randomNum";
import { TILE_SIZE } from "../constants";

export interface CrateDebris extends Debris {
  type: 'CRATE';
  value: number;
}

export const createCrateDebris = (debris: Debris): CrateDebris => ({
  ...debris,
  type: 'CRATE',
  radius: TILE_SIZE / 2 * debris.scale,
  vel: [debris.vel[0], 200],
  value: Math.floor(randomNum(0, 5)),
  texture: {
    ...debris.texture,
    offset: [debris.texture.offset[0], 1]
  }
});

const sfxURL = new URL('../../sfx/mixkit-metal-tools-box-browsing-3202.wav', import.meta.url);
export const playCrateSFX = () => {
  const sfx = new Audio(sfxURL.toString());
  sfx.load();
  sfx.play();
}