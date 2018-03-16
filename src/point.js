class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static unit() {
    return new this(1, 1)
  }
}

export default Point
