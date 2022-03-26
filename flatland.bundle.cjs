'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function euclidianDistance(start, end) {
  const a = start.x - end.x;
  const b = start.y - end.y;
  return Math.sqrt((a * a) + (b * b));
}

function manhattanDistance(start, end) {
  return Math.abs(start.x - end.x) + Math.abs(start.y - end.y);
}

function chebyshevDistance(start, end) {
  return Math.max(Math.abs(end.x - start.x), Math.abs(end.y - start.y));
}

function minkowskiDistance(start, end, p) {
  return Math.pow(
    Math.pow(Math.abs(start.x - end.x), p) +
      Math.pow(Math.abs(start.y - end.y), p),
    1 / p
  );
}

var distance = /*#__PURE__*/Object.freeze({
  __proto__: null,
  euclidianDistance: euclidianDistance,
  manhattanDistance: manhattanDistance,
  chebyshevDistance: chebyshevDistance,
  minkowskiDistance: minkowskiDistance
});

function interpolateLine(from, to) {
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

function plotLine(from, to) {
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

var line = /*#__PURE__*/Object.freeze({
  __proto__: null,
  interpolateLine: interpolateLine,
  plotLine: plotLine
});

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static unit() {
    return new this(1, 1)
  }
}

var point = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Point
});

var version = "0.5.1";

exports.distance = distance;
exports.line = line;
exports.point = point;
exports.version = version;
