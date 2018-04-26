'use strict';
describe('Account', function() {

  var account;
  beforeEach(function() {
    account = new Account();
  });

  it('Account starts with the balance of zero', function() {
    expect(account.displayBalance()).toEqual(0);
  });

  it('Client can make a deposit to account', function() {
    account.deposit(1000, "12/03/2018");
    expect(account.displayBalance()).toEqual(1000);
  });

});
