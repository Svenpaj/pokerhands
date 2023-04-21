const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that comparer returns hand1 as the winning hand', () => {
  let hand1 = new Hand('♣2', '♥2', '♣2', '♥3', '♦3');
  let hand2 = new Hand('♦3', '♦3', '♦3', '♠4', '♦4');
  expect(hand1)(CompareHands.comparer(hand1, hand2)).toBeGreaterThan(hand2);
});

/*test('check that isFullHouse returns a higher score for a stronger hand (if two hands both with full house)', () => {
  let hand1 = new Hand('♣2', '♥2', '♣2', '♥3', '♦3');
  let hand2 = new Hand('♦3', '♦3', '♦3', '♠4', '♦4');
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});*/