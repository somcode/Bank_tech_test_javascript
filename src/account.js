'use strict';
function Account() {
  this.balance = 0;
}

Account.prototype.displayBalance = function() {
  return this.balance;
}

Account.prototype.deposit = function(amount, date) {
  return this.balance += amount;
}

Account.prototype.withdrawl = function(amount, date) {
  return this.balance -= amount;
}
