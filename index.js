const CompareHands = require('./CompareHands');
const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');

// ♥♦♣♠

let hand1 = new Hand('♥Q', '♥5', '♥2', '♥9', '♦K');
let hand2 = new Hand('♠T', '♥8', '♠8', '♠K', '♦K');

console.log(CompareHands.comparer(hand1, hand2));


