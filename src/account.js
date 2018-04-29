'use strict';
function Account() {
  this.balance = 0;
}

Account.prototype.displayBalance = function() {
  return this.balance;
}

Account.prototype.deposit = function(amount, date) {
  this.balance += amount;
  return {date: date,
          amount: amount,
          balance: this.balance
        };
}

Account.prototype.withdrawl = function(amount, date) {
  if(amount > this.balance) {
    throw new Error("You don't have enough balance");
  }
   this.balance -= amount;
   return {date: date,
          amount: -amount,
          balance: this.balance
        };
}
