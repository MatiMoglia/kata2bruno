import { CreditCard } from './CreditCard.js';
import SpecialInterestStrategy from '../strategies/SpecialInterestStrategy.js';
import DoubleRewardStrategy from '../strategies/DoubleRewardStrategy.js';
import IncreasedRatePenaltyStrategy from '../strategies/IncreasedRatePenaltyStrategy.js';

export default class GoldCard extends CreditCard {
  constructor() {
    super(10000, new SpecialInterestStrategy(0.015), new DoubleRewardStrategy(), new IncreasedRatePenaltyStrategy());
  }
}
