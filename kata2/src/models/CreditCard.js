export class CreditCard {
    constructor(limit, interestStrategy, rewardStrategy, penaltyStrategy) {
      this.limit = limit;
      this.balance = 0;
      this.points = 0;
      this.interestStrategy = interestStrategy;
      this.rewardStrategy = rewardStrategy;
      this.penaltyStrategy = penaltyStrategy;
    }
  
    applyTransaction(amount) {
      if (this.balance + amount > this.limit) {
        console.log("Transaction denied: limit exceeded.");
      } else {
        this.balance += amount;
        this.points += this.rewardStrategy.calculateRewards(amount);
      }
    }
  
    applyPayment(amount) {
      this.balance -= amount;
      if (this.balance < 0) this.balance = 0;
    }
  
    calculateInterest() {
      return this.interestStrategy.calculateInterest(this.balance);
    }
  
    applyPenalty() {
      this.penaltyStrategy.applyPenalty(this);
    }
    
    applyInterest() {
      const interest = this.calculateInterest();
      this.applyTransaction(interest);
    }
  }
  