import { ctx } from "./graphics";
import {randomNum} from './utils/randomNum';
import { WIDTH, HEIGHT, TEXTURE_PADDING } from "./constants";
import * as debris from './debris/debris'
import { shipTextures } from "./textures";
import { state } from "./state";

export interface Ship {
  texture: {
    offset: [number, number];
    size: [number, number];
  },
  size: [number, number];
  pos: [number, number];
  vel: [number, number];
  nextDropTimestamp: number
}

const createShip = (w: number, h: number): Ship => {
  const x = randomNum(w, WIDTH - w);
  const y = HEIGHT * 0.25 + h * 0.1;

  return {
    texture: {
      offset: [0, 0],
      size: [16 * 4, 16 * 2]
    },
    size: [w, h],
    pos: [x, y],
    vel: [randomNum(-100, 200), 0],
    nextDropTimestamp: performance.now() + Math.floor(randomNum(1_000, 10_000)),
  }
}

export const ships: Ship[] = [
  createShip(16 * 6,  16 * 3),
  createShip(16 * 8,  16 * 4),
  createShip(16 * 10, 16 * 5),
]

export const updateShips = (dt: number) => {
  const timestamp = performance.now();

  for (const ship of ships) {
    const dir = ship.vel[0] < 0 ? -1 : 1;
    ship.pos[0] += (ship.vel[0] + state.level * 100 * dir) * dt;
    ship.pos[1] += ship.vel[1] * dt;

    if (ship.pos[0] <= -ship.size[0]) {
      ship.pos[0] = -ship.size[0];
      ship.vel[0] *= -1;
    }

    if (ship.pos[0] >= WIDTH + ship.size[0]) {
      ship.pos[0] = WIDTH + ship.size[0];
      ship.vel[0] *= -1;
    }

    if (ship.nextDropTimestamp <= timestamp) {
      // Don't drop debris outside canvas
      if (ship.pos[0] > 0 && ship.pos[0] < WIDTH) {
        debris.spawnDebris(...ship.pos);
      }

      // TODO: find more lever way to increase and clamp spawn rate
      let min = 5_000  - state.level * 1_000;
      let max = 20_000 - state.level * 1_000; // Hacky spawn rate in  crease as level progresses
      if (min < 1_000) min = 1_000 - state.level * 100;
      if (max < 2_000) max = 2_000 - state.level * 500;
      if (min < 100) min = 100
      if (max < 1_000) max = 1_000

      ship.nextDropTimestamp = performance.now() + Math.floor(randomNum(min, max));
    }
  }
}

export const renderShips = () => {
  for (const ship of ships) {
    ctx.save();
    ctx.translate(...ship.pos);

    const scale: [number, number] = [
      ship.vel[0] < 0 ? -1 : 1,
      1
    ]
    if (ship.vel[0] < 0) {
      ctx.scale(...scale)
    }

    ctx.drawImage(
      shipTextures,
      ship.texture.offset[0] + TEXTURE_PADDING,
      ship.texture.offset[1] + TEXTURE_PADDING,
      ship.texture.size[0]   - TEXTURE_PADDING * 2,
      ship.texture.size[1]   - TEXTURE_PADDING * 2,
      -ship.size[0],
      -ship.size[1],
      ship.size[0],
      ship.size[1]
    );

    if (state.mode === 'DEBUG') {
      ctx.strokeStyle = '#00FFFF';
      ctx.strokeRect(
        -ship.size[0],
        -ship.size[1],
        ship.size[0],
        ship.size[1]
      );
    }

    ctx.restore();
  }
}
