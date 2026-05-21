export type TrustSignalName =
  | "identity"
  | "behavior"
  | "reputation"
  | "contribution"
  | "consistency"
  | "accessibility"
  | "security"
  | "governance"
  | "intent"

export type TrustSignals = Partial<Record<TrustSignalName, number>>

export interface TrustScoreResult {
  score: number
  breakdown: Record<TrustSignalName, number>
  weights: Record<TrustSignalName, number>
}
