const botResult = document.querySelector('.bot-result'), playerResult = document.querySelector('.player-result');
const score = document.querySelector('.scoreG'), msg = document.querySelector('.msg');
const playerChoices = document.querySelectorAll('.player-choice-img'), botChoices = document.querySelectorAll('.bot-choice-img');
var playerScore = 0, botScore = 0;

playerChoices.forEach(choice => choice.addEventListener('click', Play));

function Play() {
    let choicesArray = Array.from(playerChoices) , botValue = playerChoices[Math.floor(Math.random() * playerChoices.length)];
    let botChoice = choicesArray.indexOf(botValue);
    this.value = choicesArray.indexOf(this);
    playerChoices.forEach(choice => choice.classList.remove('selected')), botChoices.forEach(choice => choice.classList.remove('selected'));
    msg.removeAttribute('class'), this.classList.add('selected'), botChoices[botChoice].classList.add('selected');

    if (botChoice == this.value) {
        msg.classList.add('draw'), msg.innerHTML = 'égalité !';
    } else if (botChoice == this.value - 1 || botChoice == this.value + 2) {
        msg.classList.add('win'), msg.innerHTML = 'Vous avez gagné !', playerScore++;
    } else {
        msg.classList.add('loose'), msg.innerHTML = 'Vous avez perdu !', botScore++;
    }
    score.innerHTML = `${playerScore} : ${botScore}`;
    botResult.innerHTML = `<img src="${botValue.src}" alt="${botValue.alt}">`
    playerResult.innerHTML = `<img src="${this.src}" alt="${this.alt}">`
}