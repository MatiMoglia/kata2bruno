import InterestStrategy from './InterestStrategy.js';

export default class SpecialInterestStrategy extends InterestStrategy {
  constructor(rate) {
    super();
    this.rate = rate;
  }

  calculateInterest(balance) {
    return balance * this.rate;
  }
}
