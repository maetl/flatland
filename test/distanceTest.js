import test from "ava"

import { manhattanDistance, euclidianDistance, chebyshevDistance } from "../src/distance"

test("manhattanDistance", t => {
  t.is(manhattanDistance({x:0,y:0}, {x:6, y:6}), 12)
})

test("euclidianDistance", t => {
  t.is(euclidianDistance({x:0,y:0}, {x:6, y:6}), 8.48528137423857)
})

test("chebyshevDistance", t => {
  t.is(chebyshevDistance({x:0,y:0}, {x:6, y:6}), 6)
})
