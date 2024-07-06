const generateDeck = () => {
    let deck = [];
    const suits = ['Clubs', 'Hearts', 'Spades', 'Diamonds'];
    const cards = [
      'Ace',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'Spade',
      'Queen',
      'King'
    ];

    for(const suit of suits) {
        for (const card of cards) {
            deck.push({card: card, suit: suit});
        }
    }

    return deck;
};
const deck = generateDeck();

const drawCard = () => {
    let randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1);
    console.log(card);
}
drawCard();
drawCard();
console.log(deck.length);
