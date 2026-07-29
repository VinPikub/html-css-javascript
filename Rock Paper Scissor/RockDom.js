let score = JSON.parse(localStorage.getItem('score')) ||{
        wins: 0,
        loss: 0,
        ties: 0
    };
let value = document.querySelector('#declare');
function winOrLoseGame(userChoice)
{
    let result;
    let userPick = userChoice;
    let userFlag = rockPaperScissor(userPick);
    let computerPick = Math.floor(Math.random() *3);
    let comFlag = rockPaperScissor(computerPick);

    if (userPick === 2 && computerPick === 0)
    {
        score.loss += 1;
        result = 'You lose';
    }
    else if (userPick === 0 && computerPick === 2)
    {
        score.wins += 1;
        result = 'You win';
    }
    else if (userPick < computerPick)
    {
        score.loss += 1;
        result = 'You lose';
    }
    else if (userPick > computerPick)
    {
        score.wins += 1;
        result = 'You win';
    }
    else 
    {
        score.ties += 1;
        result = 'Tie';
    }
    localStorage.setItem('score', JSON.stringify(score));
    value.innerHTML = ` <span class="result">${result}</span> <p>You <img src="./${userFlag}-emoji.png" alt=""> <img src="./${comFlag}-emoji.png" alt=""> Computer<\p><p id="resetScore">Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}<\p>`;
}
function rockPaperScissor(value)
{
    if (value === 0)
        return 'rock'
    else if (value === 1)
        return 'paper';
    else
        return 'scissors';
}
value.innerHTML = `Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}`;