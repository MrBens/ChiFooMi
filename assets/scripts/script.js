const botResult = document.querySelector('.bot-result');
const playerResult = document.querySelector('.player-result');
const score = document.querySelector('.scoreG');
const msg = document.querySelector('.msg');
var choices = document.querySelectorAll('.player-choice-img');
var botValue = 0;
var playerChoice = '';
var playerScore = 0;
var botScore = 0;

document.addEventListener('click', e =>{
    if (e.target.className == 'player-choice-img'){
        playerChoice = e.target.getAttribute('alt');
        Play(playerChoice);
        e.target.style.backgroundColor = 'green';
    }
})

let DrawImage = (value, arg) =>{
        let image = '';
        if (value == 0) {
            image = 'pierre';
        } else if (value == 1) {
            image = 'feuille';
        } else {
            image = 'ciseaux';
        }
        botResult.innerHTML = `<img class="bot-choice-img" src="assets/img/${image}.png" alt="${image}">`
        playerResult.innerHTML = `<img class="player-choice-img" src="assets/img/${arg}.png" alt="${arg}">`
}

let Play = arg => {
    botValue = Math.floor(Math.random() * 3);
    DrawImage(botValue, arg);
    CheckRules(botValue, arg);

    for (let i = 0; i < choices.length; i++) {
        choices[i].style.backgroundColor = 'transparent';
    }

    
}

let CheckRules = (arg, arg1) =>{
    if (arg == 0 && arg1 == 'pierre' || arg == 1 && arg1 == 'feuille' || arg == 2 && arg1 == 'ciseaux') {
        msg.innerHTML = 'égalité !';
        msg.style.backgroundColor = 'yellow';
    } else if (arg == 0 && arg1 == 'feuille' || arg == 1 && arg1 == 'ciseaux' || arg == 2 && arg1 == 'pierre') {
        msg.innerHTML = 'Vous avez gagné !';
        msg.style.backgroundColor = 'green';
        playerScore += 1;
    } else {
        msg.innerHTML = 'Vous avez perdu !';
        msg.style.backgroundColor = 'red';
        botScore += 1;
    }
    score.innerHTML = `${playerScore} : ${botScore}`;
}   