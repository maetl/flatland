export default function line(from, to) {
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
