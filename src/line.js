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

function steep(from, to) {
  var steep = Math.abs(to.y - from.y) > Math.abs(to.x - from.x)
  return steep;
}

function linea(from, to) {
  var startX = from.x;
  var startY = from.y;
  var endX = to.x;
  var endY = to.y;

  var result = [];

  if (startX > endX) {
    var swapX = endX;
    var swapY = endY;
    startX = swapX;
    startY = swapY;
    endX = startX;
    endY = startY;
  }

  var deltaX = Math.abs(endX - startX);
  var deltaY = Math.abs(endY - startY);
  var error = 0;
  var deltaError = Math.abs(deltaY / deltaX);
  var y = startY;

  for (var x=startX; x<=endX; x++) {
    result.push({x, y});

    error += deltaError;

    while (error >= 0.5) {
      result.push({x, y})
      y += Math.sign(endY - startY);
      error -= 1.0;
    }
  }

  return result;
}
