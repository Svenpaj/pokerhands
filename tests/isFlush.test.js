const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isFlush returns truthy if flush', () => {
  for (let suit of suits) {
    let hand = new Hand(suit + '3', suit + '5', suit + '7', suit + '4', suit + '8');
    expect(CompareHands.isFlush(hand)).toBeTruthy();
  }
});

test('check that isFlush returns falsy if not flush', () => {
  let hand = new Hand('♣3', '♣5', '♠7', '♣4', '♣8');
  expect(CompareHands.isFlush(hand)).toBeFalsy();
});

test('check that isFlush returns a higher score for a stronger hand (if two hands but with flush)', () => {
  let hand1 = new Hand('♣3', '♣5', '♣7', '♣4', '♣8');
  let hand2 = new Hand('♣6', '♣2', '♣Q', '♣T', '♣K');
  let hand1Score = CompareHands.isFlush(hand1);
  let hand2Score = CompareHands.isFlush(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});