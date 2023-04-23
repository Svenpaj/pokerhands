const CompareHands = require('../CompareHands');
const Hand = require('../Hand');
const suits = '♥♦♣♠';

test('check that comparer returns hand1 as the winning hand with "isHighest method', () => {
  let hand1 = new Hand('♣2', '♥3', '♦4', '♥5', '♦9');
  let hand2 = new Hand('♣3', '♠4', '♦5', '♠6', '♦8');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
});

test('check that comparer returns hand1 as the winning hand with "isOnePair method', () => {
  let hand1 = new Hand('♣3', '♥3', '♦4', '♥5', '♦7');
  let hand2 = new Hand('♣2', '♠2', '♦5', '♠6', '♦8');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
});

test('check that comparer returns hand1 as the winning hand with "isTwoPair method', () => {
  let hand1 = new Hand('♣3', '♥3', '♦4', '♥4', '♦7');
  let hand2 = new Hand('♣2', '♠2', '♦3', '♠3', '♦8');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
});

test('check that comparer returns hand1 as the winning hand with "isThreeOfAKind method', () => {
  let hand1 = new Hand('♣3', '♥3', '♦3', '♥5', '♦7');
  let hand2 = new Hand('♣2', '♠2', '♦2', '♠6', '♦8');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
});

test('check that comparer returns hand1 as the winning hand with "isStraight method', () => {
  let hand1 = new Hand('♣4', '♠5', '♠6', '♠7', '♦8');
  let hand2 = new Hand('♣2', '♥3', '♦4', '♥5', '♦6');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
});

test('check that comparer returns hand1 as the winning hand with "isFlush method', () => {
  let hand1 = new Hand('♣2', '♣T', '♣5', '♣8', '♣6');
  let hand2 = new Hand('♠7', '♠5', '♠6', '♠3', '♠8');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
});

test('check that comparer returns hand1 as the winning hand with "isFullHouse method', () => {
const suits = '♥♦♣♠';
  let hand1 = new Hand('♥3', '♠3', '♣3', '♣4', '♥4');
  let hand2 = new Hand('♥2', '♠2', '♦2', '♦4', '♠4');
  expect(CompareHands.comparer(hand1, hand2)).toBe(hand1)
});



