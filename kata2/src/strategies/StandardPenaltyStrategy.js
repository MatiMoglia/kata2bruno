import PenaltyStrategy from './PenaltyStrategy.js';

export default class StandardPenaltyStrategy extends PenaltyStrategy {
  applyPenalty(card) {
    card.balance += 25;  // Cargo por retraso
  }
}
