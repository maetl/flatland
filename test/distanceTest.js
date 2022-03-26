import test from "ava"

import { manhattanDistance, euclidianDistance, chebyshevDistance, minkowskiDistance } from "../src/distance"

test("manhattanDistance", t => {
  t.is(manhattanDistance({x:0,y:0}, {x:6, y:6}), 12)
})

test("euclidianDistance", t => {
  t.is(euclidianDistance({x:0,y:0}, {x:6, y:6}), 8.48528137423857)
})

test("chebyshevDistance", t => {
  t.is(chebyshevDistance({x:0,y:0}, {x:6, y:6}), 6)
})

test("minkowskiDistance", t => {
  t.is(
    minkowskiDistance({x:0,y:0}, {x:6, y:6}, 1),
    manhattanDistance({x:0,y:0}, {x:6, y:6}),
  )

  t.is(
    minkowskiDistance({x:0,y:0}, {x:6, y:6}, 2),
    euclidianDistance({x:0,y:0}, {x:6, y:6}),
  )
})
