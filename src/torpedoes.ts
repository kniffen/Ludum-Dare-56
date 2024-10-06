import { TEXTURE_PADDING, TILE_SIZE, WIDTH } from "./constants";
import { debris } from "./debris/debris";
import { createExplosion } from "./explosions";
import { ctx } from "./graphics";
import { state } from "./state";
import { sub } from "./sub";
import { debrisTextures } from './textures'

export interface Torpedo {
  pos: [number, number];
  vel: [number, number];
  size: [number, number];
}

const TEXTURE_OFFSET = [0, 4];
const VELOCITY = 1500;
export const torpedoes = new Set<Torpedo>();

export const createTorpedo = (x: number, y: number) => {
  playSFX();

  const dir = sub.vel[0] < 0 ? -1 : 1;
  const torpedo: Torpedo = {
    pos: [x + sub.radius * dir, y],
    vel: [VELOCITY * dir, 0],
    size: [20, 10]
  }
  torpedoes.add(torpedo);
}

export const updateTorpedoes = (dt: number) => {
  for (const torpedo of torpedoes) {
    torpedo.pos[0] += torpedo.vel[0] * dt;
    torpedo.pos[1] += torpedo.vel[1] * dt;

    // @ts-ignore
    const [x, y] = torpedo.pos;
    const [w, h] = torpedo.size;

    // @ts-ignore
    const [top, right, bottom, left] = [
      torpedo.pos[1] - h / 2,
      torpedo.pos[0] + w / 2,
      torpedo.pos[1] + h / 2,
      torpedo.pos[0] + w / 2,
    ]

    // Torpedo on debris collision
    for (const item of debris) {
      if (
        top    < item.pos[1] - item.radius ||
        bottom > item.pos[1] + item.radius
      ) {
        continue;
      }

      if (Math.abs(item.pos[0] - x) < item.radius) {
        createExplosion(torpedo.pos, item.radius, item.scale);
        torpedoes.delete(torpedo);
        debris.delete(item);
      }
    }

    if (x - w/2 > WIDTH || x < w / 2) {
      torpedoes.delete(torpedo)
    }
  }
}

const sfxURL = new URL('../sfx/mixkit-fast-rocket-whoosh-1714.wav', import.meta.url)
const playSFX = () => {
  const sfx = new Audio(sfxURL.toString());
  sfx.load();
  sfx.play();
}

export const renderTorpedoes = () => {
  for (const torpedo of torpedoes) {

    ctx.save();
    ctx.translate(...torpedo.pos);

    const scale: [number, number] = [
      torpedo.vel[0] < 0 ? -1 : 1,
      1
    ]
    if (torpedo.vel[0] < 0) {
      ctx.scale(...scale)
    }


    ctx.drawImage(
      debrisTextures,
      TEXTURE_OFFSET[0] * TILE_SIZE + TEXTURE_PADDING,
      TEXTURE_OFFSET[1] * TILE_SIZE + TEXTURE_PADDING,
      TILE_SIZE * 2 - TEXTURE_PADDING * 2,
      TILE_SIZE - TEXTURE_PADDING * 2,
      -(TILE_SIZE * 0.5),
      -(TILE_SIZE * 0.5),
      TILE_SIZE * 2,
      TILE_SIZE,
    );

    ctx.restore();

    if (state.mode === 'DEBUG') {
      ctx.strokeStyle = '#FF0000';
      for (const item of debris) {
        ctx.beginPath();
        ctx.moveTo(...torpedo.pos);
        ctx.lineTo(...item.pos);
        ctx.stroke();
      }
    }
  }


}
