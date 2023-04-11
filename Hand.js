const Card = require("./Card");

module.exports = class Hand {

  constructor(...cards) {
    if (cards.length !== 5) {
      throw new Error('A hand must be five cards')
    }
    // convert from to strings to card if need
    // (allow strings on the form ♥9)
    for (let i = 0; i < 5; i++) {
      if (typeof cards[i] == 'string') {
        cards[i] = new Card(cards[i][0], cards[i][1]);
      }
    }
    // if not all cards are instances of Card throw error
    for (let card of cards) {
      if (!(card instanceof Card)) {
        throw new Error('A non card found in your hand!');
      }
    }

    this.cards = cards;
  }
}