import { describe, it, expect } from "vitest"
import { computeTrust } from "../src/engine"

describe("Trust Engine", () => {
  it("computes a valid trust score", () => {
    const score = computeTrust({ identity: 0.9 })
    expect(score).toBeGreaterThan(0)
  })
})
