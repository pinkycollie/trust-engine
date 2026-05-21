import { TrustSignalName } from "../types"

export function explainScore(
  signals: Record<TrustSignalName, number>,
  weights: Record<TrustSignalName, number>
): Record<TrustSignalName, number> {
  const breakdown: Record<TrustSignalName, number> = {} as any
  const weightSum = Object.values(weights).reduce((a, b) => a + b, 0) || 1

  for (const key of Object.keys(weights) as TrustSignalName[]) {
    const w = weights[key]
    const v = signals[key] ?? 0
    breakdown[key] = (v * w) / weightSum
  }

  return breakdown
}
