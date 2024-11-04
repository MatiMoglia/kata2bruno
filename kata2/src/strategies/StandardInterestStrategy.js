import InterestStrategy from './InterestStrategy.js';

export default class StandardInterestStrategy extends InterestStrategy {
  constructor(rate) {
    super();
    this.rate = rate;
  }

  calculateInterest(balance) {
    return balance * this.rate;
  }
}
