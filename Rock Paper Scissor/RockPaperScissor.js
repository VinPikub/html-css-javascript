        let score = JSON.parse(localStorage.getItem('score')) ||{
                wins: 0,
                loss: 0,
                ties: 0
            };
        let value = document.querySelector('.declare');
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
            value.innerHTML = ` <span class="result">${result}</span> <p>You <img id="${userFlag}-img" src="./${userFlag}-emoji.png" alt=""> <img id="${comFlag}-img" src="./${comFlag}-emoji.png" alt=""> Computer<\p><p id="resetScore">Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.ties}<\p>`;
        }

        let rock = document.querySelector(".rock");
        let paper = document.querySelector(".paper");
        let scissors = document.querySelector(".scissors")
        rock.addEventListener("click", () => {
            winOrLoseGame(0);
        });
        paper.addEventListener("click", () => {
            winOrLoseGame(1);
        });
        scissors.addEventListener("click", () => {
            winOrLoseGame(2);
        });

        document.body.addEventListener('keydown', (event) => {
            if(event.key === 'r' || event.key === 'R')
                winOrLoseGame(0);
            else if(event.key === 'p' || event.key === 'P')
                winOrLoseGame(1);
            else if(event.key === 's' || event.key === 'S')
                winOrLoseGame(2);
        });
        
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
        
        let autoPlayOn = false;
        let intervalId;
        function autoPlay(){
            if(!autoPlayOn)
            {
                intervalId= setInterval(() => { //using arrow function
                let autoChoice = Math.floor(Math.random() * 3);
                winOrLoseGame(autoChoice);
                }, 1000);
                autoPlayOn = true;
                document.querySelector('.auto-stop').innerHTML = "Stop Play";
            }
            else
            {
                clearInterval(intervalId);
                autoPlayOn = false;
                document.querySelector('.auto-stop').innerHTML = "Auto Play";
            }
        }

        document.body.addEventListener("keydown", (event) => {
            if(event.key === 'a' || event.key === 'A')
                autoPlay();
        });

        let autoStop = document.querySelector(".auto-stop");
        autoStop.addEventListener("click", () => {
            autoPlay();
        });

        function resetScore(){
            score.wins = 0;
            score.loss = 0;
            score.ties = 0;
            localStorage.removeItem('score');
            if (document.querySelector('.resetScore') === null)
                document.querySelector('.declare').innerHTML = 'Wins: 0, Losses: 0, Ties: 0';
            else
                document.querySelector('.resetScore').innerHTML = 'Wins: 0, Losses: 0, Ties: 0';
        }

        let selectAlert = document.querySelector(".alert");
        function callAlert()
        {
            selectAlert.innerHTML = `Are you sure you want to reset the score? <button class="yesno yes">Yes</button> <button class="yesno no">No</button>`;
        }

        let reset = document.querySelector(".reset");
        reset.addEventListener("click", () => {
            callAlert();
            document.querySelector('.yes').addEventListener("click", () => {
                resetScore();
                selectAlert.innerHTML = '';
            });
            document.querySelector('.no').addEventListener("click", () => {
                selectAlert.innerHTML = '';
            });
        });

        document.body.addEventListener("keydown", (event) => {
            if(event.key === 'Backspace')
                autoPlay();
        });