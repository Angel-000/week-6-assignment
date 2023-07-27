class Card {
    constructor(suit, value, stringValue) {
      this.suit = suit;
      this.value = value;
      this.stringValue = stringValue;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      this.createDeck();
      this.shuffle();
    }
  
    createDeck() {
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      const values = { '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
  
      for (let suit of suits) {
        for (let stringValue in values) {
          this.cards.push(new Card(suit, values[stringValue], stringValue));
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    deal() {
      return this.cards.pop();
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.points = 0;
    }
  }
  
  function playGame(player1, player2) {
    const deck = new Deck();
  
    //dealing the deck
    for (let i = 0; i < 26; i++) {
      player1.hand.push(deck.deal());
      player2.hand.push(deck.deal());
    }
  
    //playing every round
    for (let i = 0; i < 26; i++) {
      const card1 = player1.hand.pop();
      const card2 = player2.hand.pop();

      console.log(`
        Player 1 card: ${card1.stringValue} of ${card1.suit}
        Player 2 card: ${card2.stringValue} of ${card2.suit}
      `)
  
      if (card1.value > card2.value) {
        console.log("Player 1 wins!")
        player1.points++;
      } else if (card1.value < card2.value) {
        console.log("Player 2 wins!")
        player2.points++;
      } else {
        console.log("Tie")
      }
    }
  
    console.log(`Player 1's score: ${player1.points}`);
    console.log(`Player 2's score: ${player2.points}`);
  }
  
  const player1 = new Player('Player 1');
  const player2 = new Player('Player 2');
  playGame(player1, player2);