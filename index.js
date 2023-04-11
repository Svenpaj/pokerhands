const CompareHands = require('./CompareHands');
const DeckOfCards = require('./DeckOfCards');
const Hand = require('./Hand');

// ♥♦♣♠

let hand1 = new Hand('♥K', '♥J', '♥Q', '♥K', '♥A');
let hand2 = new Hand('♥9', '♥T', '♥J', '♥Q', '♥K');
console.log(CompareHands.comparer(hand1, hand2));
//console.log(CompareHands.isRoyalStraighFlush(hand1));
//console.log(CompareHands.isRoyalStraighFlush(hand2));

