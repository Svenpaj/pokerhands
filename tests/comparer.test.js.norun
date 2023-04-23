const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that comparer returns hand1 as the winning hand', () => {
  let hand1 = new Hand('♣2', '♥2', '♣2', '♥3', '♦3');
  let hand2 = new Hand('♦3', '♦3', '♦5', '♠8', '♦4');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
});