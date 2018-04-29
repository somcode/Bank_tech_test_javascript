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

  it('Client can withdrawl amount from account', function() {
    account.balance = 1000;
    account.withdrawl(200, "14/03/2018")
    expect(account.displayBalance()).toEqual(800);
  });

  it('Throw an error to withdrawl amount more than existing balance', function() {
    expect( function(){ account.withdrawl(100, "14/03/2018") }).toThrowError ("You don't have enough balance");
  })

  it('After making deposit return date, credit and balance', function() {
    expect(account.deposit(1000, "12/03/2018")).toEqual({date: "12/03/2018", amount: 1000, balance: 1000})
  })

  it('After naking withdrawl return date, credit and balance', function() {
    account.balance = 1000;
    expect(account.withdrawl(200,"12/03/2018")).toEqual({date: "12/03/2018", amount: -200, balance: 800})
  })

});
