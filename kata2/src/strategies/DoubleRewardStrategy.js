import RewardStrategy from './RewardStrategy.js';

export default class DoubleRewardStrategy extends RewardStrategy {
  calculateRewards(amount) {
    return amount * 2;
  }
}
