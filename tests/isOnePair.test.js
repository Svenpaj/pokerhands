const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isOnePair returns truthy if one pair', () => {
  let hand = new Hand('♦2', '♦2', '♠3', '♠4', '♥5');
  expect(CompareHands.isOnePair(hand)).toBeTruthy();
});

test('check that isOnePair returns falsy if not one pair', () => {
  let hand = new Hand('♣3', '♣5', '♠7', '♣4', '♣8');
  expect(CompareHands.isOnePair(hand)).toBeFalsy();
});

test('check that isOnePair returns a higher score for a stronger hand (if two hands both with one pair)', () => {
  let hand1 = new Hand('♣2', '♣2', '♣3', '♣4', '♦5');
  let hand2 = new Hand('♦2', '♦2', '♦3', '♠4', '♦6');
  let hand1Score = CompareHands.isOnePair(hand1);
  let hand2Score = CompareHands.isOnePair(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});