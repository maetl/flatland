import { chebyshevDistance } from "./distance.js";

export function interpolateLine(from, to) {
  const points = [];
  const distance = chebyshevDistance(from, to);

  for (let step=0; step <= distance; step++) {
    const t = (distance == 0) ? 0.0 : step / distance;
    const point = lerpPoint(from, to, t);
    points.push({x: Math.round(point.x), y: Math.round(point.y)});
  }

  return points;
}

function lerpPoint(start, end, t) {
  return {
    x: start.x + t * (end.x-start.x),
    y: start.y + t * (end.y-start.y)
  }
}

export function plotLine(from, to) {
  let { x: x0, y: y0 } = from;
  let { x: x1, y: y1 } = to;

  const dx = Math.abs(x1 - x0);
  const dy = Math.abs(y1 - y0);

  const sx = x0 < x1 ? 1 : -1;
	const sy = y0 < y1 ? 1 : -1;

  let err = dx - dy;

  const points = [];

  while(true) {
    points.push({x: x0, y: y0});

    if (x0 == x1 && y0 == y1) break;

    const errq = err * 2;

    if (errq > -dx) {
      err -= dy;
      x0 += sx;
    }

    if (errq < dx) {
      err += dx;
      y0 += sy;
    }
  }

  return points;
}
