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
const cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Spade', 'Queen', 'King'];
let deck = [];

for (const suit of suits) {//deck[0] = {card: x, suit: X}
    for (const card of cards) {
        deck.push({card: card, suit: suit});
    }
}

let dealerHand = [];
let dealerScore = 0;
let playerHand = [];
let playerScore = 0;
const min = 1;
let max = 52;
let gameEnded = false;

for (let i = 0; i < 2; i++) {
    //randomly pick a card (get a random number between 1 and 52) twice
    //Needed AI assistance here
    let pickaCard = Math.floor(Math.random() * (max - min + 1)) + min;
    //splice each card from deck and push it to playerHand
    playerHand.push(deck.splice(pickaCard, 1));
    //flatten playerHand array (it becomes an array of arrays containing an object)
    //By concatenating the arrays using concat() and spreading the elements,
    //the resulting array is a single-dimensional array that contains
    //all the elements from the original nested arrays.
    //It's worth noting that the concat() method does not modify the original arrays
    // Instead, it returns a new array that contains the concatenated elements.
    //Needed AI assistance here
    playerHand = [].concat(...playerHand);

    //create a conditional to get player' and dealer' scores
    let cardValue = playerHand[playerHand.length - 1].card;
    if (cardValue === 'Spade' || cardValue === 'Queen' || cardValue === 'King') {
        playerScore += 10;
    } else if (cardValue === 'Ace') {
        playerScore += 1;
    } else if (cards.includes(cardValue)) {
    //turn string into number
    //Needed AI assistance here
    playerScore += Number(cardValue);
    }
    max--;//each time a card is dealt, max diminishes in one
}//
console.log("Starting player hand: ");
console.log(playerHand);
console.log(`Starting player score: ${playerScore}`);
console.log('-----');

//repeat for dealer
for (let i = 0; i < 2; i++) {
    let pickaCard = Math.floor(Math.random() * (max - min + 1)) + min;
    dealerHand.push(deck.splice(pickaCard, 1));
    dealerHand = [].concat(...dealerHand);
    let cardValue = dealerHand[dealerHand.length - 1].card;

    if (cardValue === 'Spade' || cardValue === 'Queen' || cardValue === 'King') {
        dealerScore += 10;
    } else if (cardValue === 'Ace') {
        dealerScore += 1;
    } else if (cards.includes(cardValue)) {
    dealerScore += Number(cardValue);
    }
    max--;
}//
console.log("Starting dealer hand: ");
console.log(dealerHand);
console.log(`Starting dealer score: ${dealerScore}`);
console.log('-----');

//player and dealer are dealt 1 more card until score is >= 21.
for (let index = 0; index < 12; index++) {
    //if game ending conditions are met, loop breaks and game is finished
    //set a flag
    //Needed AI assistance here
    if (gameEnded) {
        break;
    }
    let pickaCard = Math.floor(Math.random() * (max - min + 1)) + min;
    playerHand.push(deck.splice(pickaCard, 1));
    playerHand = [].concat(...playerHand);
    let cardValue = playerHand[playerHand.length - 1].card;

    if (cardValue === 'Spade' || cardValue === 'Queen' || cardValue === 'King') {
        playerScore += 10;
    } else if (cardValue === 'Ace') {
        playerScore += 1;
    } else if (cards.includes(cardValue)) {
    playerScore += Number(cardValue);
    }
    max--;
    if (playerScore === 21) {
        console.log(`You win! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
        console.log('-----');
        gameEnded = true;
        break;
    } else if (playerScore > 21) {
        console.log(`You loose! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
        console.log('-----');
        gameEnded = true;
        break;
    }
    //before loop is done, dealer gets a card as well
    let pickaCard2 = Math.floor(Math.random() * (max - min + 1)) + min;
    dealerHand.push(deck.splice(pickaCard2, 1));
    dealerHand = [].concat(...dealerHand);
    let cardValue2 = dealerHand[dealerHand.length - 1].card;

    if (cardValue2 === 'Spade' || cardValue2 === 'Queen' || cardValue2 === 'King') {
        dealerScore += 10;
    } else if (cardValue2 === 'Ace') {
        dealerScore += 1;
    } else if (cards.includes(cardValue2)) {
        dealerScore += Number(cardValue2);
    }
    max--;
    if (dealerScore === 21) {
        console.log(`You loose! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
        console.log('-----');
        gameEnded = true;
        break;
    } else if (dealerScore > 21) {
        console.log(`You win! Your final score was ${playerScore} while the dealer had ${dealerScore}`);
        console.log('-----');
        gameEnded = true;
        break;
    }
}

console.log("Ending player hand: ");
console.log(playerHand);
console.log(`Ending player score: ${playerScore}`);
console.log(`Ending dealer hand: `);
console.log(dealerHand);
console.log(`Ending dealer score: ${dealerScore}`);
