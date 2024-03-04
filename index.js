var you;
var yourScore = 0;
var player;
var playerScore = 0;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {

      for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
      }

}

function selectChoice() {
you = this.id;
document.getElementById("your-choice").src = you + ".png";

player = choices[Math.floor(Math.random() *3 )];
document.getElementById("opponent-choice").src = player + ".png";


if (you === player) {
    yourScore += 1;
    playerScore += 1;

}
else {
    if (you === "rock") {
        if (player === "scissors") {
            yourScore += 1;
        }
        else if (player === "paper") {
            playerScore += 1;
        }
     else if (you === "scissors") {
            if (player === "paper") {
                yourScore += 1;
            }
            else if (player === "rock") {
                playerScore += 1;
            }
     else if (you === "paper") {
                if (player === "rock") {
                    yourScore += 1;
                }
                else if (player === "scissors") {
                    playerScore += 1;
                }

        }

    }
}

document.getElementById("your-score").innerText = yourScore;
document.getElementById("opponent-score").innerText = playerScore;

}



if (yourScore > 15) {
    alert("You are winner!");
}
else if (playerScore > 15) {
    alert("Game over!");
}

}

