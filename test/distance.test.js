import test from "ava";
import * as distance from "../src/distance.js";

test("manhattanDistance", t => {
  t.is(distance.manhattanDistance({x:0,y:0}, {x:6, y:6}), 12);
});

test("euclidianDistance", t => {
  t.is(distance.euclidianDistance({x:0,y:0}, {x:6, y:6}), 8.48528137423857);
});

test("chebyshevDistance", t => {
  t.is(distance.chebyshevDistance({x:0,y:0}, {x:6, y:6}), 6);
});

test("minkowskiDistance", t => {
  t.is(
    distance.minkowskiDistance({x:0,y:0}, {x:6, y:6}, 1),
    distance.manhattanDistance({x:0,y:0}, {x:6, y:6}),
  );

  t.is(
    distance.minkowskiDistance({x:0,y:0}, {x:6, y:6}, 2),
    distance.euclidianDistance({x:0,y:0}, {x:6, y:6}),
  );
});
