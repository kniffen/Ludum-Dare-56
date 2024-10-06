import { COLORS, HEIGHT, TEXTURE_PADDING, TILE_SIZE, WIDTH } from "./constants";
import { ctx } from "./graphics";
import { randomNum } from "./utils/randomNum";
import { creatureTextures } from './textures'
import { state } from "./state";
import { debris } from "./debris/debris";
import { TrashDebris } from "./debris/trash";
import { CrateDebris } from "./debris/crate";
import { BarrelDebris } from "./debris/barrel";
import { getDistance } from "./utils/getDistance";

export interface Crab {
  pos: [number, number];
  vel: [number, number];
  radius: number;
  scale: number;
  acc: number,
  frame: number,
  frameLength: number;
  closestDebris: TrashDebris | CrateDebris | BarrelDebris | null;
}

const FRAMES = 3;
const TEXTURE_OFFSET = [
  [0, 1, 2],
  [0]
] as const;


export const createCrab = (): Crab => {
  const scale = randomNum(1, 2);
  const crab: Crab = {
    pos: [
      Math.floor(randomNum(0, WIDTH)),
      Math.floor(randomNum(HEIGHT * 0.9, HEIGHT - TILE_SIZE))
    ],
    vel: [
      randomNum(50, 200),
      0,
    ],
    scale,
    radius: scale * 8,
    acc: 0,
    frame: 0,
    frameLength: randomNum(20, 30),
    closestDebris: null
  }
  return crab;
}


export const crabs = new Set<Crab>();
export const resetCrabs = () => {
  crabs.clear();
  const crabsArr = (new Array(15)).fill(null).map(() => createCrab());
  // Makes sure crabs with higher Y position are rendered first.
  crabsArr.sort((a, b) => b.scale - a.scale);
  crabsArr.map((crab) => { crabs.add(crab); });
}
resetCrabs();

const findClosestDebris = (crab: Crab): TrashDebris | CrateDebris | BarrelDebris | null => {
  let closestDebris: TrashDebris | CrateDebris | BarrelDebris | null = null

  for (const item of debris) {
    if (!closestDebris) closestDebris = item;
    const distA = getDistance(...crab.pos, ...item.pos);
    const distB = getDistance(...crab.pos, ...closestDebris.pos);
    if (distA <= distB) {
      closestDebris = item
    }
  }

  return closestDebris
}

export const updateCrabs = (dt: number) => {
  for (const crab of crabs) {
    crab.pos[0] += crab.vel[0] * dt;
    crab.pos[1] += crab.vel[1] * dt;

    if (crab.pos[0] < 0) {
      crab.pos[0] = 0;
      crab.vel[0] *= -1;
    }

    if (crab.pos[0] > WIDTH) {
      crab.pos[0] = WIDTH;
      crab.vel[0] *= -1;
    }
  }
}

setInterval(() => {
  for (const crab of crabs) {
    crab.closestDebris = findClosestDebris(crab)
    if (crab.closestDebris && crab.closestDebris.type === 'TRASH') {
      const dir = crab.closestDebris.pos[0] < crab.pos[0] ? -1 : 1;
      crab.vel[0] = Math.abs(crab.vel[0]) * dir;
    }
  }
}, 5_000)

export const renderCrabs = () => {
  for (const crab of crabs) {
    crab.acc++;

    if (crab.acc >= crab.frameLength) {
      crab.frame++;
      crab.acc = 0;
    }

    if (crab.frame >= FRAMES) {
      crab.frame = 0;
    }

    ctx.save();
    ctx.translate(...crab.pos);
    ctx.scale(crab.vel[0] < 0 ? crab.scale : -crab.scale, crab.scale)

    ctx.drawImage(
      creatureTextures,
      TEXTURE_OFFSET[0][crab.frame] * TILE_SIZE + TEXTURE_PADDING,
      TEXTURE_OFFSET[1][0] * TILE_SIZE + TEXTURE_PADDING,
      TILE_SIZE - TEXTURE_PADDING * 2,
      TILE_SIZE - TEXTURE_PADDING * 2,
      -TILE_SIZE  * 0.5,
      -TILE_SIZE  * 0.5,
      TILE_SIZE,
      TILE_SIZE
    );
    ctx.restore();

    // Shadow
    ctx.save();
    ctx.translate(...crab.pos);
    ctx.fillStyle = COLORS.SKY;
    ctx.beginPath();
    ctx.ellipse(0, crab.radius, crab.radius, crab.radius * 0.1, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();

    if (state.mode === 'DEBUG') {
      ctx.save();
      ctx.translate(...crab.pos);
      ctx.strokeStyle = '#FFFF00';
      ctx.beginPath();
      ctx.arc(0, 0, crab.radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();

      // Ray to closest debris
      if (crab.closestDebris && debris.has(crab.closestDebris)){
        ctx.strokeStyle = '#FF0000';
        ctx.beginPath();
        ctx.moveTo(...crab.pos);
        ctx.lineTo(...crab.closestDebris.pos)
        ctx.stroke();
      }

    }
  }
}