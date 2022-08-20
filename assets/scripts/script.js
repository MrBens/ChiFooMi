const botResult = document.querySelector('.bot-result'), playerResult = document.querySelector('.player-result');
const score = document.querySelector('.scoreG'), msg = document.querySelector('.msg');
const playerChoices = document.querySelectorAll('.player-choice-img'), botChoices = document.querySelectorAll('.bot-choice-img');
var botValue = 0, playerScore = 0, botScore = 0, result = '';

let DrawImage = (botChoice, playerChoice) => {
    botResult.innerHTML = `<img class="bot-choice-img" src="assets/img/${botChoice}.png" alt="${botChoice}">`
    playerResult.innerHTML = `<img class="player-choice-img" src="assets/img/${playerChoice}.png" alt="${playerChoice}">`
}

let PrintResult = result => {
    msg.removeAttribute('class')
    if (result == 'draw') {
        msg.classList.add(result)
        msg.innerHTML = 'égalité !';
    } else if (result == 'win') {
        msg.classList.add(result)
        msg.innerHTML = 'Vous avez gagné !';
        playerScore++;
    } else {
        msg.classList.add(result)
        msg.innerHTML = 'Vous avez perdu !';
        botScore++;
    }
    score.innerHTML = `${playerScore} : ${botScore}`;
}

let CheckRules = (botChoice, playerChoice) => {
    if (botChoice == playerChoice) {
        result = 'draw';
    } else if (botChoice == playerChoice - 1 || botChoice == playerChoice+2) {
        result = 'win';
    } else {
        result = 'loose';
    }
    PrintResult(result)
}   

document.addEventListener('click', e => {
    if (e.target.classList.contains('player-choice-img')) {
        Play(e.target);
    }
})

let Play = target => {
    botValue = Math.floor(Math.random() * 3);
    for (let i = 0; i < playerChoices.length; i++) {
        playerChoices[i].classList.remove('selected');
        botChoices[i].classList.remove('selected');
        if (target == playerChoices[i]) {
            target.classList.add('selected');
            CheckRules(botValue, i);
            DrawImage(botChoices[botValue].getAttribute('alt'), target.getAttribute('alt'));
        }
    }
    botChoices[botValue].classList.add('selected');
}