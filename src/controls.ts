import { pause, state } from "./state";
import { sub } from "./sub";
import { createTorpedo } from "./torpedoes";

const SUB_ACC = [600, 300];

window.addEventListener('keydown', (e) => {
  switch (e.key.toLowerCase()) {
    case 'w': {
      sub.vel[1] = -Math.abs(sub.vel[1]);
      sub.acc[1] = -SUB_ACC[1];
      break;
    }

    case 'a': {
      sub.vel[0] = -Math.abs(sub.vel[0]);
      sub.acc[0] = -SUB_ACC[0];
      break;
    }

    case 's': {
      sub.vel[1] = Math.abs(sub.vel[1]);
      sub.acc[1] = SUB_ACC[1];
      break;
    }

    case 'd': {
      sub.vel[0] = Math.abs(sub.vel[0]);
      sub.acc[0] = SUB_ACC[0];
      break;
    }

    case 'e': {
      if (sub.torpedoCount > 0) {
        createTorpedo(...sub.pos);
        sub.torpedoCount--;
      }
      break;
    }

    case 'p': {
      pause();
      break;
    }

    case 'o': {
      state.mode = state.mode === 'DEBUG' ? 'NORMAL' : 'DEBUG';
      break;
    }
  }
});

window.addEventListener('keyup', (e) => {
  switch (e.key.toLowerCase()) {
    case 'w':
    case 's': {
      sub.acc[1] = 0;
      break;
    }

    case 'a':
    case 'd': {
      sub.acc[0] = 0;
      break;
    }
  }
});