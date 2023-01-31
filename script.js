
let cards = [];
let sum = 0;
let hasBlackjack = false; 
let isAlive = false;
let message = ''
let messageEd = document.getElementById('message')
let sumEd = document.getElementById('sum')
let cardEd = document.getElementById('card')
// console.log(cards)

function RandomNum() {
    
    let randomNumAce =  Math.floor(Math.random() * 13 ) + 1
    if (randomNumAce === 1) {
        return 10
    } else if (randomNumAce > 10) {
        return 11
    } else {
        return randomNumAce
    }
}
function startGame() {
    isAlive = true
    let firstCard = RandomNum()
    let secondCard = RandomNum()
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame()
}
function renderGame() {

    cardEd.textContent = "cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEd.textContent += cards[i] + ' '
    }
    sumEd.textContent = 'sum: ' + sum
    if (sum <= 50) {
        message = ('Do you want to draw a new card?')
    } else if (sum === 51) {
        message = ('Wooh! you got a Blackjack!')
        hasBlackjack = true; 
    } else {
        message = ('you are out of the game')
        isAlive = false; 
    }
    messageEd.textContent = message            
}

function newCard () {
    if (isAlive === true && hasBlackjack === false) {
        let newCardDrawn = RandomNum();
        sum += newCardDrawn
        cards.push(newCardDrawn)
        renderGame();
    }

}
 

