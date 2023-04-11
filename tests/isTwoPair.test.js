const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isTwoPair returns truthy if two pair', () => {
  let hand = new Hand('♦2', '♥2', '♠3', '♥3', '♥8');
  expect(CompareHands.isTwoPair(hand)).toBeTruthy();
});

test('check that isTwoPair returns falsy if not two pair', () => {
  let hand = new Hand('♥3', '♣3', '♠7', '♣4', '♣8');
  expect(CompareHands.isTwoPair(hand)).toBeFalsy();
});

test('check that isTwoPair returns a higher score for a stronger hand (if two hands both with two pair)', () => {
  let hand1 = new Hand('♣2', '♥2', '♣5', '♥5', '♦6');
  let hand2 = new Hand('♦2', '♦2', '♦5', '♠5', '♦7');
  let hand1Score = CompareHands.isTwoPair(hand1);
  let hand2Score = CompareHands.isTwoPair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});