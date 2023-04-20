module.exports = class CompareHands {

  static suits = '♥♦♣♠';
  static ranks = '23456789TJQKA';

  static comparer(hand1, hand2) {
   this.sortByRank(hand1, hand2)
    for (let i = 0; i < 5; i++) { 
      console.log(hand1.cards[i]);
      if (hand1.cards[i].suit === hand2.cards[i].suit &&
        hand1.cards[i].rank === hand2.cards[i].rank) {
        console.log(hand1.cards[i])
        return ("There is an extra copy of this card. Game over..")
        } // This does not work if there are 4 cards of the same rank total in the array and 1 of them is not sorted in the same order. example "'♥K[index4]','♦K[index5]' vs '♠K[index4]', '♥K[index5]'"
    }
    

    let comparers = [
      'isStraightFlush',
      'isFourOfAKind',
      'isFullHouse',
      'isFlush',
      'isStraight',
      'isThreeOfAKind',
      'isTwoPair',
      'isOnePair',
      'isHighest'
    ];

    for (let comparer of comparers) {
      let hand1Score = this[comparer](hand1);
      let hand2Score = this[comparer](hand2);
      if (hand1Score === 0 && hand2Score === 0) { continue; }
      if (hand1Score === hand2Score) { return [hand1, hand2]; }
      else if (hand1Score > hand2Score) { return hand1; }
      else { return hand2; }
    }
    
    // return this.isFlush(hand1) > this.isFlush(hand2) ? 1 : 2;

    // return this.isStraight(hand1) > this.isStraight(hand2) ? 1 : 2;
    
  }

  static isStraightFlush(hand) {
    return this.isStraight(hand) && this.isFlush(hand);
  }

  static isFourOfAKind(hand) { 
    this.sortByRank(hand);
    let ranks = this.numberOfOcurrences(hand.cards);
    let values = Object.values(ranks);
    if (values.includes(4) && values.indexOf(4) === values.lastIndexOf(4)) {
      return this.rankToPoint(Object.keys(ranks)[values.indexOf(4)]);
    }
    return 0;
  }

  static isFullHouse(hand) { 
    this.sortByRank(hand);
    let ranks = this.numberOfOcurrences(hand.cards);
    let values = Object.values(ranks);
    let onePair = '';
    let threeOfAKind = '';
    if (values.includes(2) && values.indexOf(2) === values.lastIndexOf(2)) {
      onePair = this.rankToPoint(Object.keys(ranks)[values.indexOf(2)])
    }
    else { return 0; }

    if (values.includes(3) && values.indexOf(3) === values.lastIndexOf(3)) {
      threeOfAKind = this.rankToPoint(Object.keys(ranks)[values.indexOf(3)])
    }
    else { return 0; }

    if (onePair !== threeOfAKind) {
      return threeOfAKind;
    }
  }

  static isFlush(hand) {
    this.sortByRank(hand);
    // console.log('sorted hand: ', hand)
    let suits = [];
    for (let card of hand.cards) {
      suits.push(card.suit);
    }
    // not a flush
    if ([...new Set(suits)].length !== 1) {
      return 0
    }
    // return points depending of strength of flush
    this.sortByRank(hand);
    let score = 0, counter = 0;
    for (let card of hand.cards) {
      score += this.rankToPoint(card.rank) * 10 ** counter;
      counter += 2;
    }
    return score;
  }

  static isStraight(hand) {
    this.sortByRank(hand);
    let ranks = '';
    for (let card of hand.cards) {
      ranks += card.rank;
    }
    if (ranks.includes('2') && ranks.includes('A')) {
      ranks = 'A' + ranks.slice(0, 4);
    }
    if (!('A' + this.ranks).includes(ranks)) { return 0; };
    return this.rankToPoint(ranks[4]);
  }

  static isThreeOfAKind(hand) {
    this.sortByRank(hand);
    let ranks = this.numberOfOcurrences(hand.cards);
    let values = Object.values(ranks);
    if (values.includes(3) && values.indexOf(3) === values.lastIndexOf(3)) {
      return this.rankToPoint(Object.keys(ranks)[values.indexOf(3)])
    }
    return 0;
  }

  static isTwoPair(hand) { 
    this.sortByRank(hand);
    let ranks = this.numberOfOcurrences(hand.cards);
    let values = Object.values(ranks);
    if (values.includes(2) && values.indexOf(2) !== values.lastIndexOf(2)) {
      return this.rankToPoint(Object.keys(ranks)[values.lastIndexOf(2)]) * 1000 
        + this.rankToPoint(Object.keys(ranks)[values.indexOf(2)]) * 100 
        + this.rankToPoint(Object.keys(ranks)[values.indexOf(1)])
    }
    
    return 0;

  }

  static isOnePair(hand) { 
    this.sortByRank(hand);
    let ranks = this.numberOfOcurrences(hand.cards);
    let values = Object.values(ranks);
    if (values.includes(2) && values.indexOf(2) === values.lastIndexOf(2)) {
      return this.rankToPoint(Object.keys(ranks)[values.indexOf(2)]) * 1000 
        + this.rankToPoint(Object.keys(ranks)[values.lastIndexOf(1)]) * 100 
        + this.rankToPoint(Object.keys(ranks)[values.lastIndexOf(1)-1]) * 10 
        + this.rankToPoint(Object.keys(ranks)[values.lastIndexOf(1)-2]); // last can also be values.indexOf(1) because the lowest rank will be the first instance of the value 1. but for symantic syntax I go for lastIndexOf(1)-2. that way I am working my way backwards.
    }
    return 0;
  }

  static isHighest(hand) {
    this.sortByRank(hand);
    /*for (let card of hand.cards) {
      ranks += card.rank;
    }*/
    let score = 0, counter = 0;
    for (let card of hand.cards) {
      score += this.rankToPoint(card.rank) * 10 ** counter;
      counter += 2;
    }
    return score;
    /*return this.rankToPoint(ranks[4]) * 1000
      + this.rankToPoint(ranks[3]);*/
  }

  // helper functions

  static rankToPoint(rank) {
    return this.ranks.indexOf(rank) + 2;
  }

  static sortByRank(hand) {
    hand.cards = hand.cards.sort((a, b) => {
      return this.rankToPoint(a.rank) < this.rankToPoint(b.rank) ?
        -1 : 1;
    }); 
  }

  static numberOfOcurrences(hand) {
        let ranks = {};
        for (let card of hand) {
            ranks[card.rank] = ranks[card.rank] || 0;
            ranks[card.rank]++;
        }

        return ranks;
  }
}
