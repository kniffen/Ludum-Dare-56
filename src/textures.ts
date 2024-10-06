// TODO: create one file for all textures?

export const textureURLs = {
  debris:    new URL('../assets/debris.png',    import.meta.url),
  ships:     new URL('../assets/ships.png',     import.meta.url),
  creatures: new URL('../assets/creatures.png', import.meta.url),
  seabed:    new URL('../assets/seabed.png',    import.meta.url),
  nightsky:  new URL('../assets/nightsky.png',  import.meta.url),
  water:     new URL('../assets/water.png',     import.meta.url),
}

export const debrisTextures   = new Image();
export const shipTextures     = new Image();
export const creatureTextures = new Image();
export const seabedTexture    = new Image();
export const nightskyTexture  = new Image();
export const waterTexture     = new Image();

debrisTextures.src   = textureURLs.debris.toString();
shipTextures.src     = textureURLs.ships.toString();
creatureTextures.src = textureURLs.creatures.toString();
seabedTexture.src    = textureURLs.seabed.toString();
nightskyTexture.src  = textureURLs.nightsky.toString();
waterTexture.src     = textureURLs.water.toString();