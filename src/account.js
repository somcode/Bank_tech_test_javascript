'use strict';
function Account() {
  this.balance = 0;
}

Account.prototype.displayBalance = function() {
  return this.balance;
}
