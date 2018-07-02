'use strict';

class Poker {
  constructor() {
    this.suite = this.setSuite();
    this.value = this.setValue();
  }

  rng(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  setSuite() {
    const temp = Math.random();
    if (temp <= 0.25) { return 'C'; } else
    if (temp > 0.25 && temp <= 0.5) { return 'D'; } else
    if (temp > 0.5 && temp <= 0.75) { return 'H'; } else
    { return 'E'; }
  }

  setValue() {
    const temp = rng(1, 13);
    switch (temp) {
      case 1:
        return 'A';
      case 11:
        return 'J';
      case 12:
        return 'Q';
      case 13:
        return 'K';
      default:
        return temp;
    }
  }

  checkCard() {
    return `${this.value}${this.suite}`;
  }
}

module.exports = Poker;
