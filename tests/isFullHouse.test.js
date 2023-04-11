const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isFullHouse returns truthy if full house', () => {
  let hand = new Hand('♦2', '♥2', '♠3', '♥3', '♥3');
  expect(CompareHands.isFullHouse(hand)).toBeTruthy();
});

test('check that isFullHouse returns falsy if not full house', () => {
  let hand = new Hand('♥3', '♣3', '♠7', '♣4', '♣8');
  expect(CompareHands.isFullHouse(hand)).toBeFalsy();
});

test('check that isFullHouse returns a higher score for a stronger hand (if two hands both with full house)', () => {
  let hand1 = new Hand('♣2', '♥2', '♣2', '♥3', '♦3');
  let hand2 = new Hand('♦3', '♦3', '♦3', '♠4', '♦4');
  let hand1Score = CompareHands.isFullHouse(hand1);
  let hand2Score = CompareHands.isFullHouse(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});