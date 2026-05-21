import { TrustSignals, TrustScoreResult, TrustSignalName } from "./types"
import { defaultWeights } from "./weights/default"
import { normalizeSignals } from "./utils/normalize"
import { aggregateScore } from "./utils/aggregate"
import { explainScore } from "./utils/explain"

export function computeTrust(
  signals: TrustSignals,
  weights: Partial<Record<TrustSignalName, number>> = {}
): TrustScoreResult {
  const mergedWeights: Record<TrustSignalName, number> = {
    ...defaultWeights,
    ...weights,
  }

  const normalized = normalizeSignals(signals)
  const score = aggregateScore(normalized, mergedWeights)
  const breakdown = explainScore(normalized, mergedWeights)

  return { score, breakdown, weights: mergedWeights }
}
