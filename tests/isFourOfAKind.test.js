const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isFourOfAKind returns truthy if four of a kind', () => {
  let hand = new Hand('♦2', '♥2', '♠2', '♣2', '♥8');
  expect(CompareHands.isFourOfAKind(hand)).toBeTruthy();
});

test('check that isFourOfAKind returns falsy if not four of a kind', () => {
  let hand = new Hand('♥3', '♣3', '♠7', '♣4', '♣8');
  expect(CompareHands.isFourOfAKind(hand)).toBeFalsy();
});

test('check that isFourOfAKind returns a higher score for a stronger hand (if two hands both with four of a kind)', () => {
  let hand1 = new Hand('♣2', '♥2', '♣2', '♥2', '♦6');
  let hand2 = new Hand('♦3', '♦3', '♦3', '♠3', '♦6');
  let hand1Score = CompareHands.isFourOfAKind(hand1);
  let hand2Score = CompareHands.isFourOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});