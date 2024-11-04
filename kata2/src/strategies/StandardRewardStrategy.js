import RewardStrategy from './RewardStrategy.js';

export default class StandardRewardStrategy extends RewardStrategy {
  calculateRewards(amount) {
    return amount;
  }
}
