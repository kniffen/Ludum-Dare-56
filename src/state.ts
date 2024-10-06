import { resetCrabs } from "./crabs";
import { gameOverEl, menuEl } from "./overlay";

export interface GameState {
  timer: number;
  level: number;
  score: number;
  isPaused: boolean;
  isGameOver: boolean;
  mode: 'NORMAL' | 'DEBUG';
}

export const state: GameState = {
  timer: 0,
  level: 0,
  score: 0,
  isPaused: true,
  isGameOver: false,
  mode: 'NORMAL'
}

setInterval(() => {
  if (!state.isPaused && !state.isGameOver) {
    state.timer--;
    if (state.timer <= 0) {
      state.timer = 29;
      state.level++;
    }
  }
}, 1_000)

export const pause = () => {
  state.isPaused = !state.isPaused;
  menuEl.style.display = state.isPaused ? 'flex' : 'none';
  gameOverEl.style.display = 'none';
}

export const gameOver = () => {
  state.isGameOver = true;
  state.isPaused = true;
  menuEl.style.display = 'none';
  gameOverEl.style.display = 'flex';
}

export const newGame = () => {
  state.isGameOver = false;
  state.isPaused = false;
  state.timer = 29;
  state.level = 1;
  state.score = 0;
  menuEl.style.display = 'none';
  gameOverEl.style.display = 'none';
  resetCrabs();
}