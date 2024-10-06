import { COLORS, HEIGHT, WIDTH } from "./constants";
import { ctx } from "./graphics";
import { seabedTexture, nightskyTexture, waterTexture } from "./textures";

export interface Area {
  coords: [number, number, number, number];
  color: string;
}

export const areas: Record<'sky' | 'seabed' | 'water', Area> = {
  water:  {coords: [0, HEIGHT * 0.25, WIDTH, HEIGHT * 0.85], color: COLORS.WATER},
  sky:    {coords: [0, 0,             WIDTH, HEIGHT * 0.25], color: COLORS.SKY},
  seabed: {coords: [0, HEIGHT * 0.85, WIDTH, HEIGHT],        color: COLORS.SEABED  },
}

export const renderAreas = () => {
  // Background
  ctx.fillStyle = COLORS.SKY;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  // Water
  ctx.drawImage(
    waterTexture,
    ...areas.water.coords
  )
  // Sky
  ctx.fillStyle = areas.sky.color;
  ctx.fillRect(...areas.sky.coords);
  ctx.drawImage(
    nightskyTexture,
    0,0, WIDTH, 180
  )

  // Seabed
  ctx.fillStyle = areas.seabed.color;
  ctx.fillRect(...areas.seabed.coords);

  ctx.drawImage(
    seabedTexture,
    0,HEIGHT - 230, WIDTH, 300
  )
}