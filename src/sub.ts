import { WIDTH, HEIGHT, TILE_SIZE, SCALE, TEXTURE_PADDING } from "./constants";
import { ctx } from './graphics';
import { areas } from "./areas";
import { state } from "./state";

export interface Sub {
  health: number;
  pos: [number, number];
  vel: [number, number];
  radius: number;
  torpedoCount: number;
  texture: {
    offset: [number, number];
    size: [number, number];
  }
}

const VELOCITY = [600, 300]
const img = new Image();
const imgURL = new URL('../assets/sub.png', import.meta.url);
img.src = imgURL.toString();

export const sub: Sub = {
  health: 1,
  pos: [WIDTH / 2, HEIGHT / 2],
  vel: [-VELOCITY[0], VELOCITY[1]],
  radius: 24,
  torpedoCount: 5,
  texture: {
    offset: [0 * TILE_SIZE, 0 * TILE_SIZE],
    size:   [3 * TILE_SIZE, 2 * TILE_SIZE]
  }
}

export const updateSub = (dt: number) => {
  sub.pos[0] += sub.vel[0] * dt;
  sub.pos[1] += sub.vel[1] * dt;

  if (sub.pos[0] < sub.radius)         { sub.pos[0] = sub.radius;          }
  if (sub.pos[0] > WIDTH - sub.radius) { sub.pos[0] = WIDTH - sub.radius;  }

  if (sub.pos[1] < areas.water.coords[1] + 50)  { sub.pos[1] = areas.water.coords[1] + 50  }
  if (sub.pos[1] > areas.water.coords[3] - 100) { sub.pos[1] = areas.water.coords[3] - 100 }
}

export const renderSub = () => {
  ctx.save();
  ctx.translate(...sub.pos);

  const scale: [number, number] = [sub.vel[0] < 0 ? SCALE : -SCALE, SCALE]
  ctx.scale(...scale)

  ctx.drawImage(
    img,
    sub.texture.offset[0] + TEXTURE_PADDING,
    sub.texture.offset[1] + TEXTURE_PADDING,
    sub.texture.size[0]   - TEXTURE_PADDING * 2,
    sub.texture.size[1]   - TEXTURE_PADDING * 2,
    -sub.texture.size[0] * 0.5,
    -sub.texture.size[1] * 0.5,
    sub.texture.size[0],
    sub.texture.size[1],
  );

  ctx.restore();
  if (state.mode === 'DEBUG') {
    ctx.save();
    ctx.translate(...sub.pos);
    ctx.strokeStyle = '#0000FF';
    ctx.beginPath();
    ctx.arc(0, 0, sub.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.restore();
  }
}
