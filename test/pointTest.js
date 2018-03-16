import test from "ava"

import point from "../src/point"

test("unit", t => {
  const unit = point.unit()
  t.is(unit.x, 1)
  t.is(unit.y, 1)
})
