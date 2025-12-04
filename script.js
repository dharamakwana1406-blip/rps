//script.js
let score=0;
function play(userChoice) {
      const choices = ['rock', 'paper', 'scissors'];
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      let result = '';

      if (userChoice === computerChoice) {
        result = "It's a tie!";
        score=0;
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        result = "You win!";
        score++;
      } else  {
        result = "your loss!";
        score--;
      }
    
document.getElementById('score').textContent = "Score: " + score;
      document.getElementById('result').innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${result}`;
    }