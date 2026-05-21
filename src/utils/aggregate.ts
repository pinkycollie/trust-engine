import { TrustSignalName } from "../types"

export function aggregateScore(
  signals: Record<TrustSignalName, number>,
  weights: Record<TrustSignalName, number>
): number {
  let sum = 0
  let weightSum = 0

  for (const key of Object.keys(weights) as TrustSignalName[]) {
    const w = weights[key]
    const v = signals[key] ?? 0
    sum += v * w
    weightSum += w
  }

  if (weightSum === 0) return 0
  return sum / weightSum
}
