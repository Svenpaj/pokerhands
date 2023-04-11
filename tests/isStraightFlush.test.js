const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isStraighFlush returns truthy if straight flush', () => {
  let hand = new Hand('♥2', '♥3', '♥4', '♥5', '♥6');
  expect(CompareHands.isStraightFlush(hand)).toBeTruthy();
});

test('check that isStraightFlush returns falsy if not straight flush', () => {
  let hand = new Hand('♥3', '♥4', '♥5', '♥6', '♥8');
  expect(CompareHands.isStraightFlush(hand)).toBeFalsy();
});

test('check that isStraighFlush returns a higher score for a stronger hand (if two hands both with straight flush)', () => {
  let hand1 = new Hand('♥2', '♥2', '♥5', '♥5', '♥6');
  let hand2 = new Hand('♦3', '♦4', '♦5', '♦6', '♦7');
  let hand1Score = CompareHands.isStraightFlush(hand1);
  let hand2Score = CompareHands.isStraightFlush(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});