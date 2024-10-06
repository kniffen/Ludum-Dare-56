import { pause, state } from "./state";
import { sub } from "./sub";
import { createTorpedo } from "./torpedoes";

window.addEventListener('keydown', (e) => {
  switch (e.key.toLowerCase()) {
    case 'w': {
      sub.vel[1] = -Math.abs(sub.vel[1]);
      break;
    }

    case 'a': {
      sub.vel[0] = -Math.abs(sub.vel[0]);
      break;
    }

    case 's': {
      sub.vel[1] = Math.abs(sub.vel[1]);
      break;
    }

    case 'd': {
      sub.vel[0] = Math.abs(sub.vel[0]);
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