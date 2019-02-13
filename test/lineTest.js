import test from "ava"

import line from "../src/line"

test("horizontal", t => {
  const path = line({x: 0, y: 0}, {x: 5, y: 0});
  t.deepEqual(path, [
    {x: 0, y: 0},
    {x: 1, y: 0},
    {x: 2, y: 0},
    {x: 3, y: 0},
    {x: 4, y: 0},
    {x: 5, y: 0},
  ])
});

test("vertical", t => {
  const path = line({x: 0, y: 0}, {x: 0, y: 5});
  t.deepEqual(path, [
    {x: 0, y: 0},
    {x: 0, y: 1},
    {x: 0, y: 2},
    {x: 0, y: 3},
    {x: 0, y: 4},
    {x: 0, y: 5},
  ])
});

test("diagonal upper left quadrant", t => {
  const path = line({x: 0, y: 0}, {x: -3, y: -3});
  t.deepEqual(path, [
    {x: 0, y: 0},
    {x: -1, y: -1},
    {x: -2, y: -2},
    {x: -3, y: -3}
  ])
});

test("diagonal upper right quadrant", t => {
  const path = line({x: 0, y: 0}, {x: 3, y: -3});
  t.deepEqual(path, [
    {x: 0, y: 0},
    {x: 1, y: -1},
    {x: 2, y: -2},
    {x: 3, y: -3}
  ])
});

test("diagonal lower right quadrant", t => {
  const path = line({x: 0, y: 0}, {x: 3, y: 3});
  t.deepEqual(path, [
    {x: 0, y: 0},
    {x: 1, y: 1},
    {x: 2, y: 2},
    {x: 3, y: 3}
  ])
});

test("diagonal lower left quadrant", t => {
  const path = line({x: 0, y: 0}, {x: -3, y: 3});
  t.deepEqual(path, [
    {x: 0, y: 0},
    {x: -1, y: 1},
    {x: -2, y: 2},
    {x: -3, y: 3}
  ])
});

test("arbitrary short path", t => {
  const path = line({x: 0, y: -1}, {x: 6, y: -4});
  t.deepEqual(path, [
    {x: 0, y: -1},
    {x: 1, y: -1},
    {x: 2, y: -2},
    {x: 3, y: -2},
    {x: 4, y: -3},
    {x: 5, y: -3},
    {x: 6, y: -4}
  ])
});
