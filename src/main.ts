import { canvas, ctx } from './graphics';
import { updateShips, renderShips } from './ships'
import {sub, updateSub, renderSub } from './sub';
import {updateDebris, renderDebris, debris} from './debris/debris'
import { crabs, updateCrabs, renderCrabs } from './crabs';
import { renderAreas } from './areas'
import { renderOverlay } from './overlay'
import { createExplosion, renderExplosions } from './explosions'
import { renderTorpedoes, updateTorpedoes } from './torpedoes';
import { playCrateSFX } from './debris/crate';
import { gameOver, state } from './state';
import './torpedoes';
import './controls';
import './style.css';

let lastTimestamp = performance.now();
const update = () => {
  const timestamp = performance.now();
  const dt = (timestamp / lastTimestamp) / 1000;
  lastTimestamp = timestamp;
  if (state.isPaused) return;

  updateDebris(dt);
  updateTorpedoes(dt);
  updateShips(dt);
  updateSub(dt);
  updateCrabs(dt);

  for (const item of debris) {
    if (item.isBreaking) continue;

    // Sub collision detection
    if (
      Math.abs(item.pos[0] - sub.pos[0]) < item.radius + sub.radius &&
      Math.abs(item.pos[1] - sub.pos[1]) < item.radius + sub.radius
    ) {
      switch (item.type) {
        case 'TRASH': {
          item.isBreaking = true;
          state.score += item.value;
          break;
        }
        case 'CRATE': {
          playCrateSFX();
          item.isBreaking = true;
          sub.torpedoCount += item.scale;
          break;
        }
        case 'BARREL': {
          createExplosion(item.pos, item.blastRadius, item.scale);
          debris.delete(item);
          sub.health -= 0.1
          if (sub.health <= 0) {
            gameOver();
          }
          break;
        }
      }
    }

    // Crab collision detection
    for (const crab of crabs) {
      if (
        Math.abs(crab.pos[0] - item.pos[0]) < crab.radius + item.radius &&
        Math.abs(crab.pos[1] - item.pos[1]) < crab.radius + item.radius
      ) {
        switch (item.type) {
          case 'BARREL': {
            debris.delete(item);
            createExplosion(item.pos, item.blastRadius, item.scale);
            break;
          }
          default: {
            item.isBreaking = true;
            break;
          }
        }
        crabs.delete(crab);
      }
    }

    if (crabs.size <= 0) {
      gameOver();
    }
  }
}

const render = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  renderAreas()
  renderTorpedoes();
  renderSub();
  renderDebris();
  renderShips();
  renderCrabs();
  renderExplosions();

  if (state.mode === 'DEBUG') {
    ctx.lineWidth = 1;

    for(const item of debris){
      ctx.strokeStyle = '#0000FF';
      ctx.beginPath();
      ctx.moveTo(...sub.pos);
      ctx.lineTo(...item.pos);
      ctx.stroke();
    }
  }

  renderOverlay();
}

const gameloop = () => {
  update();
  render();
  window.requestAnimationFrame(gameloop);
}

window.requestAnimationFrame(gameloop);
