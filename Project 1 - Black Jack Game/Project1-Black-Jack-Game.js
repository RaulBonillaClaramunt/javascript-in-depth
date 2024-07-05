/*
    Requirements:

    - Generate a deck of 52 cards (2-Ace, all 4 suits) As - 10 + JQK
    - spades queen and king have the value of 10
    - clubs (♣), diamonds (♦), hearts (♥) and spades (♠)
    - At the start of the game, the "dealer" and "player" each
      get dealt 2 random cards (no replacement)
    - The game plays itself according the the following behaviour:
        1. Continue while neither player has exceeded
           21 points or gotten exactly 21
        2. The player is dealt a random card
        3. If the player goes above 21, dealer wins
           If the player gets exactly 21, player wins
        4. The dealer is dealt a random card
        5. If the dealer goes above 21, player wins
           If the dealer gets exactly 21, player wins
        6. Repeat - go back to step 1

    Point Breakdown:
    2-10: Actual Face Value
    Jack, Queen, King: 10
    Ace: 1*

    Logging:
    - Starting hands
    - Ending hands + who won + score
*/
//Generate a deck of 52 cards: array of 52 objects {card: King, suit: spades} */

const suits = ['clubs', 'hearts', 'spades', 'diamonds'];
//const cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Spade', 'Queen', 'King'];
const cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Spade', 'Queen', 'King'];
let deck = [];

for (const suit of suits) {//deck[0] = {card: x, suit: X}
    for (const card of cards) {
        deck.push({card: card, suit: suit});
    }
}
//console.log(deck);
let dealerHand = [];
let dealerScore = 0;
let playerHand = [];
let playerScore = 0;

const min = 1;
let max = 52;

//randomly pick a card (get a random number between 1 and 52) twice
//splice each card from deck and push it to playerHand
//flatten playerHand array (it becomes an array of arrays containing an object)
for (let i = 0; i < 2; i++) {
    let pickaCard = Math.floor(Math.random() * (max - min + 1)) + min;
    playerHand.push(deck.splice(pickaCard, 1));
    playerHand = [].concat(...playerHand);//[ { card: 'Spades', suit: 'diamonds' } ]
    //create a conditional to get player' and dealer' scores
    let cardValue = playerHand[playerHand.length - 1].card;
    //console.log(cardValue);
    if (cardValue === 'Spade' || cardValue === 'Queen' || cardValue === 'King') {
        playerScore += 10;
    } else if (cardValue === 'Ace') {
        playerScore += 1;
    } else if (cards.includes(cardValue)) {
    playerScore += Number(cardValue);
    }
    max--;
}//
/*
console.log(playerHand);
console.log(playerScore);
console.log('-----');
*/
//repeat for dealer
for (let i = 0; i < 2; i++) {
    let pickaCard = Math.floor(Math.random() * (max - min + 1)) + min;
    dealerHand.push(deck.splice(pickaCard, 1));
    dealerHand = [].concat(...dealerHand);//[ { card: 'Spades', suit: 'diamonds' } ]
    //create a conditional to get player' score
    let cardValue = dealerHand[dealerHand.length - 1].card;
    //console.log(cardValue);
    if (cardValue === 'Spade' || cardValue === 'Queen' || cardValue === 'King') {
        dealerScore += 10;
    } else if (cardValue === 'Ace') {
        dealerScore += 1;
    } else if (cards.includes(cardValue)) {
    dealerScore += Number(cardValue);
    }
    max--;
}//
/*
console.log(dealerHand);
console.log(dealerScore);
console.log(max);
*/
//player and dealer are dealt 1 more card until score is >= 21.
for (let index = 0; index < 12; index++) {
    let pickaCard = Math.floor(Math.random() * (max - min + 1)) + min;
    playerHand.push(deck.splice(pickaCard, 1));
    playerHand = [].concat(...playerHand);//[ { card: 'Spades', suit: 'diamonds' } ]
    //conditional to get player' and dealer' scores
    let cardValue = playerHand[playerHand.length - 1].card;
    //console.log(cardValue);
    if (cardValue === 'Spade' || cardValue === 'Queen' || cardValue === 'King') {
        playerScore += 10;
    } else if (cardValue === 'Ace') {
        playerScore += 1;
    } else if (cards.includes(cardValue)) {
    playerScore += Number(cardValue);
    }
    max--;
    if (playerScore === 21) {
        console.log(`You win! Your final score was ${playerScore} while the deealer had ${dealerScore}`);

    }
}
