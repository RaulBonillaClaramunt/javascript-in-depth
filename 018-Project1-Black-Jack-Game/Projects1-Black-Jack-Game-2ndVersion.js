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
      'Jack',
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

const checkScore = (hand) => {
    let total = 0;

    for (const cardObject of hand) {
        if (cardObject.card === 'Jack' || cardObject.card === 'Queen' || cardObject.card === 'King') {
            total += 10;
        } else if (cardObject.card === 'Ace') {
            total += 1;
        } else {
            total += Number(cardObject.card);
        }
    }

    return total;
}

const myDeck = generateDeck();
const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

console.log("Starting Player Hand: ", playerHand);
console.log("Starting Player Score: ", checkScore(playerHand));
console.log("Starting Dealer Hand: ", dealerHand);
console.log("Starting Dealer Score: ", checkScore(dealerHand));



//we create an infinite loop that breaks when one of the players hits 21 or over
while (true) {
    //deal the player a card + chek if player busts 21 + check if player hits 21
    playerHand.push(drawCard(myDeck));//we can reuse the code we wrote before
    const playerScore = checkScore(playerHand);
    let dealerScore = checkScore(dealerHand);
    if (playerScore > 21) {
        console.log(`You lose! Your final score was ${playerScore}.
            While the dealer had ${dealerScore}`);
            break;
    }

    if (playerScore === 21) {
        console.log(`You win! Your final score was ${playerScore}.
            While the dealer had ${dealerScore}`);
            break;
    }

    dealerHand.push(drawCard(myDeck));//we can reuse the code we wrote before
    dealerScore = checkScore(dealerHand);

    if (dealerScore > 21) {
        console.log(`You win! Your final score was ${playerScore}.
            While the dealer had ${dealerScore}`);
            break;
    }

    if (dealerScore === 21) {
        console.log(`You lose! Your final score was ${playerScore}.
            While the dealer had ${dealerScore}`);
            break;
    }
    //deal the dealer a card + chek if dealer busts 21 + check if dealer hits 21
};

console.log("Ending Player Hand: ", playerHand);
console.log("Ending Player Score: ", checkScore(playerHand));
console.log("Ending Dealer Hand: ", dealerHand);
console.log("Ending Dealer Score: ", checkScore(dealerHand));

/*
console.log(playerHand);
console.log(dealerHand);
console.log(myDeck.length);
*/
