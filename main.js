const prepareUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (["rock","paper","scissors"].includes(userInput)) {
      return userInput;
    } else {
      console.error('Error!')
    }
  }
  // console.log(prepareUserChoice('Paper')); // should print 'paper'
  // console.log(prepareUserChoice('fork')); // should print 'Error!' and `undefined`
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
      case 0:
        return "rock"
      case 1:
        return "paper"
      case 2: 
        return "scissors"
    }
  }
  
  // console.log(getComputerChoice()); // should print 'rock', 'paper', or 'scissors'
  function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice) {
      return "The game is a tie! 😐"
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer won! 😞"
       } else {
          return "User won! 😃"
        }
      }
      if (userChoice === "paper") {
        if (computerChoice === "scissors")
        return "Computer won! 😞"
      } else {
        return "User won! 😃"
      }
      if (userChoice === "scissors") {
        if (computerChoice === "rock")
        return "Computer won! 😞"
      } else {
        return "User won! 😃"
      }
  }
  function playGame(choice) {
    const userChoice = prepareUserChoice(choice)
    const computerChoice = getComputerChoice()
    const emojis = {
        rock: "🗿",
        paper: "📜",
        scissors: "✂️"
    }
    document.getElementById("userChoice").innerText = emojis[userChoice]
    document.getElementById("computerChoice").innerText = emojis[computerChoice]
    document.getElementById("result").innerText = determineWinner(userChoice,computerChoice)
  }
  