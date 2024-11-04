import PenaltyStrategy from './PenaltyStrategy.js';

export default class IncreasedRatePenaltyStrategy extends PenaltyStrategy {
  applyPenalty(card) {
    card.balance += 50;  // Cargo mayor por retraso
    card.interestStrategy.rate += 0.005;  // Aumenta la tasa de interés
  }
}
