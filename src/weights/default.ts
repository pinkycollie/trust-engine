import { TrustSignalName } from "../types"

export const defaultWeights: Record<TrustSignalName, number> = {
  identity: 0.18,
  behavior: 0.12,
  reputation: 0.14,
  contribution: 0.10,
  consistency: 0.10,
  accessibility: 0.12,
  security: 0.10,
  governance: 0.07,
  intent: 0.07,
}
