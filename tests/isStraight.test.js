const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isStraight returns truthy if straight', () => {
  let hand = new Hand('♣3', '♣5', '♣7', '♠4', '♦6');
  expect(CompareHands.isStraight(hand)).toBeTruthy();
});

test('check that isStraight returns falsy if not straight', () => {
  let hand = new Hand('♣3', '♣5', '♣7', '♠4', '♦T');
  expect(CompareHands.isStraight(hand)).toBeFalsy();
});

test('check that isStraight returns a higher score for a stronger hand (if two hands but with straight)', () => {
  let hand1 = new Hand('♣3', '♣4', '♠5', '♠6', '♣7');
  let hand2 = new Hand('♠5', '♣6', '♠7', '♣8', '♣9');
  let hand1Score = CompareHands.isStraight(hand1);
  let hand2Score = CompareHands.isStraight(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});

