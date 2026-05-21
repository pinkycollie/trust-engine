// src/signals/identity.ts
export function computeIdentitySignal(input: { verified: boolean; mfa: boolean; riskScore?: number }): number {
  let score = 0
  if (input.verified) score += 0.6
  if (input.mfa) score += 0.3
  if (input.riskScore != null) score += 0.1 * (1 - input.riskScore)
  return Math.min(1, score)
}
// Repeat similar simple stubs for behavior, reputation, etc.)
