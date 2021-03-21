const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
          compareHands(this.textContent, computerChoice);
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  const compparty = () => {
    party.position(1000, 1,  {
      count: 40,
      countVariation: 0.5,
      angleSpan: 880,
      yVelocity: -300,
      yVelocityVariation: 1,
      rotationVelocityLimit: 6,
      scaleVariation: 0.8
    });
    
  };
  const playerparty = () => {
    party.position(250, 1,  {
      count: 40,
      countVariation: 0.5,
      angleSpan: 880,
      yVelocity: -300,
      yVelocityVariation: 1,
      rotationVelocityLimit: 6,
      scaleVariation: 0.8
    });
    
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        playerparty();
       

        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        compparty();
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        compparty();
        
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        playerparty();
        
        
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        compparty();
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        playerparty();
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();

