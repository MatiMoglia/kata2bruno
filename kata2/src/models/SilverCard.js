import { CreditCard } from './CreditCard.js';
import StandardInterestStrategy from '../strategies/StandardInterestStrategy.js';
import StandardRewardStrategy from '../strategies/StandardRewardStrategy.js';
import StandardPenaltyStrategy from '../strategies/StandardPenaltyStrategy.js';

export default class SilverCard extends CreditCard {
  constructor() {
    super(5000, new StandardInterestStrategy(0.02), new StandardRewardStrategy(), new StandardPenaltyStrategy());
  }
}
