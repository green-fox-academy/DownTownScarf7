'use strict';

module.exports = function poker() {
  const deck = [],
    black = [],
    white = [];

  // init deck
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 13; i++) {
      let card = '';
      if (i === 0) { card = 'A'; } else
      if (i === 9) { card = 'T'; } else
      if (i === 10) { card = 'J'; } else
      if (i === 11) { card = 'Q'; } else
      if (i === 12) { card = 'K'; } else
      { card = `${i + 1}`; }
      card += ['C', 'D', 'H', 'S'][j];
      deck.push(card);
    }
  }

  // init hands
  for (let i = 0; i < 10; i++) {
    if (black.length < 5) {
      black.push(deck.splice(Math.floor(Math.random() * deck.length), 1).toString());
    } else {
      white.push(deck.splice(Math.floor(Math.random() * deck.length), 1).toString());
    }
  }

  // hand values

  return black;
}
