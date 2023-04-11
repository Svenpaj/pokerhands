const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isThreeOfAKind returns truthy if three of a kind', () => {
  let hand = new Hand('♦2', '♠2', '♥2', '♥3', '♥4');
  expect(CompareHands.isThreeOfAKind(hand)).toBeTruthy();
});

test('check that isThreeOfAKind returns falsy if not three of a kind', () => {
  let hand = new Hand('♣3', '♣5', '♠7', '♣4', '♣8');
  expect(CompareHands.isThreeOfAKind(hand)).toBeFalsy();
});

test('check that isThreeOfAKind returns a higher score for a stronger hand (if two hands but with three of a kind)', () => {
  let hand1 = new Hand('♣2', '♣2', '♣2', '♣3', '♦4');
  let hand2 = new Hand('♦3', '♦3', '♦3', '♠4', '♦5');
  let hand1Score = CompareHands.isThreeOfAKind(hand1);
  let hand2Score = CompareHands.isThreeOfAKind(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});