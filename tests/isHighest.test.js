const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isHighest returns a higher score for a stronger hand (if two hands both with nothing but highest card)', () => {
  let hand1 = new Hand('♣2', '♣4', '♣5', '♣8', '♦9');
  let hand2 = new Hand('♦T', '♦3', '♦7', '♠5', '♦K');
  let hand1Score = CompareHands.isHighest(hand1);
  let hand2Score = CompareHands.isHighest(hand2);
  expect(hand2Score).toBeGreaterThan(hand1Score);
});