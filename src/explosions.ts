import { TEXTURE_PADDING, TILE_SIZE } from "./constants";
import { ctx } from "./graphics";
import { debrisTextures } from './textures'

const frames = 4;
const frameLength = 20;

interface Explosion {
  pos: [number, number];
  radius: number;
  scale: number;
  acc: number;
  frame: number;
}

export const explosions = new Set<Explosion>()

export const renderExplosions = () => {
  for (const explosion of explosions) {
    explosion.acc++;

    if (explosion.acc >= frameLength) {
      explosion.frame++;
      explosion.acc = 0;
    }

    if (explosion.frame >= frames) {
      explosions.delete(explosion)
    }

    ctx.save();
    ctx.translate(...explosion.pos);
    ctx.scale(explosion.scale, explosion.scale);
    ctx.drawImage(
      debrisTextures,
      TILE_SIZE * explosion.frame + TEXTURE_PADDING,
      TILE_SIZE * 3               + TEXTURE_PADDING,
      TILE_SIZE - TEXTURE_PADDING * 2,
      TILE_SIZE - TEXTURE_PADDING * 2,
      -TILE_SIZE * 0.5,
      -TILE_SIZE * 0.5,
      TILE_SIZE,
      TILE_SIZE
    );
    ctx.restore();
  }
}

const explosionSFXURL = new URL('../sfx/mixkit-arcade-game-explosion-2759.wav', import.meta.url);
export const createExplosion = (pos: [number, number], radius: number, scale: number) => {
  const sfx = new Audio(explosionSFXURL.toString());
  sfx.load();
  sfx.play();

  explosions.add({
    pos,
    radius,
    scale,
    acc: 0,
    frame: 0
  });
}