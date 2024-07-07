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
const myDeck = generateDeck();

//when coding, try to gather each need into a Function and make that Function
//self-contained so that anything it needs is inside the scope of the Function
//in this case, drawCard function has a deck argument that we can polute when
//we call the function and assign it to a variable (const myCard)
const drawCard = (deck) => {
    let randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck[randomIndex];
    deck.splice(randomIndex, 1);
    return card;
}

const playerHand = [];
const dealerHand = [];
const myCard = drawCard(myDeck);//console.log(myCard); + console.log(myDeck.length);
