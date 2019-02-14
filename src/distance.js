export function euclidianDistance(start, end) {
  const a = start.x - end.x;
  const b = start.y - end.y;
  return Math.sqrt((a * a) + (b * b));
}

export function manhattanDistance(start, end) {
  return Math.abs(start.x - end.x) + Math.abs(start.y - end.y);
}

export function chebyshevDistance(start, end) {
  return Math.max(Math.abs(end.x - start.x), Math.abs(end.y - start.y));
}
