import { Debris } from "./debris";

export interface BarrelDebris extends Debris {
  type: 'BARREL';
  blastRadius: number;
}

export const createBarrelDebris = (debris: Debris): BarrelDebris => ({
  ...debris,
  type: 'BARREL',
  radius: 15,
  blastRadius: 30,
  vel: [debris.vel[0], 400],
  texture: {
    ...debris.texture,
    offset: [debris.texture.offset[0], 2]
  }
})