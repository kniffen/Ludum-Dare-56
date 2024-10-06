import { ctx } from "./graphics";
import { sub } from './sub'
import { crabs } from './crabs'
import { newGame, state } from './state'

export const menuEl     = document.getElementById('menu') as HTMLElement;
export const gameOverEl = document.getElementById('game-over') as HTMLElement;
const startCTA          = document.getElementById('cta-start') as HTMLButtonElement;
const restartCTA        = document.getElementById('cta-restart') as HTMLButtonElement;

const dd = (d: number): string => d < 10 ? `0${d}` : d.toString();

export const renderOverlay = () => {
  ctx.font = '20px Arial';
  ctx.fillStyle = '#EAF0D8'
  ctx.fillText(`Level: ${state.level}`, 500, 40);
  ctx.fillText(`00:${dd(state.timer)}`, 600, 40);
  ctx.fillText(`Crabs: ${crabs.size}/15`, 700, 40);
  ctx.fillText(`Torpedoes: ${sub.torpedoCount}`, 860, 40);
  ctx.fillText(`Score: ${state.score}`, 1030, 40);
  ctx.fillText(`Health: ${(sub.health * 100).toFixed(0)}%`, 1150, 40);

  if (state.mode === 'DEBUG') {
    ctx.font = '32px Arial';
    ctx.fillStyle = '#FFFF00'
    ctx.fillText('DEBUG MODE', 1000, 100);
  }
}

startCTA.addEventListener('click',    () => { newGame(); });
restartCTA?.addEventListener('click', () => { newGame(); });