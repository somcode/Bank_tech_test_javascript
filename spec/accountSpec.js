'use strict';
describe('Account', function() {

  var account;
  beforeEach(function() {
    account = new Account();
  });

  it('Account starts with the balance of zero', function() {
    expect(account.balance()).toEqual(0);
  });

});
