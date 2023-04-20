const CompareHands = require('./CompareHands');
const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');

// ♥♦♣♠

let hand1 = new Hand('♥T', '♥J', '♥Q', '♥K', '♦K');
let hand2 = new Hand('♠T', '♠J', '♠Q', '♠K', '♥K');

console.log(CompareHands.comparer(hand1, hand2));


