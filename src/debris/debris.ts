import { areas } from '../areas';
import { randomNum } from '../utils/randomNum';
import { TrashDebris, createTrashDebris } from './trash';
import { CrateDebris, createCrateDebris } from './crate';
import { BarrelDebris, createBarrelDebris } from './barrel';
import { ctx } from '../graphics';
import { TEXTURE_PADDING, TILE_SIZE } from '../constants';
import { debrisTextures} from '../textures'
import { createExplosion } from '../explosions';
import { state } from '../state';

export interface Debris {
  pos: [number, number];
  vel: [number, number];
  finalYPos: number;
  radius: number;
  scale: number;
  texture: {
    offset: [number, number],
    size: [number, number]
  },
  isBreaking: boolean,
  breaking: {
    acc: number;
    frame: number;
  }
}

const types = ['TRASH', 'CRATE', 'BARREL'] as const;
export const debris = new Set<TrashDebris | CrateDebris | BarrelDebris>();


const splashSFXURL = new URL('../../sfx/mixkit-sea-water-splash-1198.wav', import.meta.url);
export const spawnDebris = (x: number, y: number) => {
  const type = (() => {
    const num = Math.random();
    if (num < 0.6)      { return types[0] } // 60% chance
    else if (num < 0.8) { return types[1] } // 20% chance
    else                { return types[2] } // 20% chance
  })();

  const debrisItem = {
    pos: [x, y],
    finalYPos: Math.floor(randomNum(areas.seabed.coords[1], areas.seabed.coords[3])),
    vel: [randomNum(-5, 5), 1],
    scale: Math.floor(randomNum(1.8,2)), // TODO: related to ship scale?
    radius: 1,
    texture: {
      offset: [0, 0],
      size: [1, 1]
    },
    isBreaking: false,
    breaking: {
      acc: 0,
      frame: 0,
    }
  } satisfies Debris

  const sfx = new Audio(splashSFXURL.toString());
  sfx.load();
  sfx.play();
  switch (type) {
    case 'TRASH':  return debris.add(createTrashDebris(debrisItem));
    case 'CRATE':  return debris.add(createCrateDebris(debrisItem));
    case 'BARREL': return debris.add(createBarrelDebris(debrisItem));
  }
}

export const updateDebris = (dt: number) => {
  for (const debrisItem of debris) {
    debrisItem.pos[0] += debrisItem.vel[0] * dt;
    debrisItem.pos[1] += debrisItem.vel[1] * dt;

    if (debrisItem.pos[1] > debrisItem.finalYPos) {
      debrisItem.vel[0] = 0;
      debrisItem.vel[1] = 0;

      switch (debrisItem.type) {
        case 'BARREL':
          createExplosion(debrisItem.pos, debrisItem.radius, debrisItem.scale);
          debris.delete(debrisItem);
          break;
        default:
          debrisItem.isBreaking = true;
          break
      }
    }
  };
}

const BREAKING_FRAMES = 4;
const BREAKING_FRAME_LENGTH = 10;

const breakSFXURL = new URL('../../sfx/mixkit-bag-of-coins-touch-3187.wav', import.meta.url);

export const renderDebris = () => {
  for (const debrisItem of debris) {
    ctx.save();
    ctx.translate(...debrisItem.pos);
    ctx.scale(debrisItem.scale, debrisItem.scale)

    if (debrisItem.isBreaking) {
      debrisItem.breaking.acc++;

      if (debrisItem.breaking.acc >= BREAKING_FRAME_LENGTH) {
        debrisItem.breaking.frame++;
        debrisItem.breaking.acc = 0;
      }

      if (debrisItem.breaking.frame >= BREAKING_FRAMES) {
        const sfx = new Audio(breakSFXURL.toString());
        sfx.load();
        sfx.play();
        debris.delete(debrisItem)
      }

      ctx.drawImage(
        debrisTextures,
        TILE_SIZE * debrisItem.breaking.frame + 1 + TEXTURE_PADDING,
        TEXTURE_PADDING,
        TILE_SIZE - TEXTURE_PADDING * 2,
        TILE_SIZE - TEXTURE_PADDING * 2,
        -TILE_SIZE * 0.5,
        -TILE_SIZE * 0.5,
        TILE_SIZE,
        TILE_SIZE
      );

    } else {
      ctx.drawImage(
        debrisTextures,
        debrisItem.texture.offset[0] * TILE_SIZE + TEXTURE_PADDING,
        debrisItem.texture.offset[1] * TILE_SIZE + TEXTURE_PADDING,
        debrisItem.texture.size[0]   * TILE_SIZE - TEXTURE_PADDING * 2,
        debrisItem.texture.size[1]   * TILE_SIZE - TEXTURE_PADDING * 2,
        -debrisItem.texture.size[0]  * TILE_SIZE * 0.5,
        -debrisItem.texture.size[1]  * TILE_SIZE * 0.5,
        debrisItem.texture.size[0]   * TILE_SIZE,
        debrisItem.texture.size[1]   * TILE_SIZE,
      );
    }

    ctx.restore();

    if (state.mode === 'DEBUG') {
      ctx.save();
      ctx.translate(...debrisItem.pos);
      ctx.strokeStyle = '#00FF00';
      ctx.beginPath();
      ctx.arc(0, 0, debrisItem.radius, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.restore();
    }
  }
}
