const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that isCheating returns truthy if one hand2 have duplicate cards', () => {
  let hand1 = new Hand('♦2', '♥2', '♠5', '♥7', '♥T');
  let hand2 = new Hand('♣2', '♥3', '♥4', '♥4', '♥5');
  expect(CompareHands.isCheating(hand1, hand2)).toBeTruthy();
});

test('check that isCheating returns truthy if one hand1 have duplicate cards', () => {
  let hand1 = new Hand('♦2', '♦2', '♠5', '♥7', '♥T');
  let hand2 = new Hand('♥2', '♥3', '♥4', '♥8', '♥5');
  expect(CompareHands.isCheating(hand1, hand2)).toBeTruthy();
});

test('check that isCheating returns truthy if the two hands contains the same card', () => {
  let hand1 = new Hand('♥4', '♣7', '♠7', '♣9', '♣8');
  let hand2 = new Hand('♥3', '♣8', '♠5', '♣4', '♣T');
  expect(CompareHands.isCheating(hand1, hand2)).toBeTruthy();
});

test('check that isCheating returns falsy if there is no dubplicate cards in the game', () => {
  let hand1 = new Hand('♥4', '♣7', '♠7', '♣9', '♣8');
  let hand2 = new Hand('♥3', '♣2', '♠5', '♣4', '♣T');
  expect(CompareHands.isCheating(hand1, hand2)).toBeFalsy();
});
