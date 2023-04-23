const CompareHands = require('./CompareHands');
const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');

// ♥♦♣♠

let hand1 = new Hand('♣2', '♥2', '♣2', '♥3', '♦3');
let hand2 = new Hand('♣3', '♠3', '♦5', '♠8', '♦4');

console.log(CompareHands.comparer(hand1, hand2));


