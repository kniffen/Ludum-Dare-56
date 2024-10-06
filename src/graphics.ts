import { WIDTH, HEIGHT } from "./constants";

const _canvas = document.getElementById('canvas');
if (!(_canvas instanceof HTMLCanvasElement)) {
  throw new Error('Missing canvas element');
}

_canvas.width  = WIDTH;
_canvas.height = HEIGHT;

const _context = _canvas.getContext('2d')
if (!_context) {
  throw new Error('Missing context');
}

// @ts-ignore
_context.webkitImageSmoothingEnabled = false;
// @ts-ignore
_context.mozImageSmoothingEnabled = false;
_context.imageSmoothingEnabled = false;

export const canvas = _canvas;
export const ctx = _context;