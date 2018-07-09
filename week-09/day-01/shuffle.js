'use strict';

const Panama = {
  cash: 0,
  name: 'Panama',
  tax: '1%',
  deposit: function(amt) {
    this.cash += amt;
    console.log(`${this.name} got ${amt}💵`);
  }
};

const Cyprus = {
  cash: 0,
  name: 'Cyprus',
  tax: '5%',
  deposit: function(amt) {
    this.cash += amt;
    console.log(`${this.name} got ${amt}💵`);
  }
};

const Shuffler = {
  cash: 10000,

  pick: function () {
    this.dollars -= 1000;
    Math.random() > 0.5 ? Panama.deposit(1000) : Cyprus.deposit(1000);
  }
};

Shuffler.pick();
Shuffler.pick();
Shuffler.pick();
Shuffler.pick();

console.log(Panama.cash);
console.log(Cyprus.cash);
