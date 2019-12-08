let game = document.getElementById("game");

for (let i = 0; i < 9; i++) {
  game.innerHTML += '<div class="block"></div>';
}

let sequence = 0;

game.onclick = function(event) {
  //   console.log(event);
  if ((event.target.className = "block")) {
    if (sequence % 2 == 0) {
      event.target.innerHTML = "X";
    } else {
      event.target.innerHTML = "O";
    }
    sequence++;
    checkWinner();
  }
};

function checkWinner() {
  let allBlock = document.getElementsByClassName("block");

  // For "X"
  // HORIZONTAL
  if (
    allBlock[0].innerHTML == "X" &&
    allBlock[1].innerHTML == "X" &&
    allBlock[2].innerHTML == "X"
  ) {
    alert("X win");
  }
  if (
    allBlock[3].innerHTML == "X" &&
    allBlock[4].innerHTML == "X" &&
    allBlock[5].innerHTML == "X"
  ) {
    alert("X win");
  }
  if (
    allBlock[6].innerHTML == "X" &&
    allBlock[7].innerHTML == "X" &&
    allBlock[8].innerHTML == "X"
  ) {
    alert("X win");
  }

  // VERTICAL
  if (
    allBlock[0].innerHTML == "X" &&
    allBlock[3].innerHTML == "X" &&
    allBlock[6].innerHTML == "X"
  ) {
    alert("X win");
  }
  if (
    allBlock[1].innerHTML == "X" &&
    allBlock[4].innerHTML == "X" &&
    allBlock[7].innerHTML == "X"
  ) {
    alert("X win");
  }
  if (
    allBlock[2].innerHTML == "X" &&
    allBlock[5].innerHTML == "X" &&
    allBlock[8].innerHTML == "X"
  ) {
    alert("X win");
  }

  // DIAGONAL
  if (
    allBlock[0].innerHTML == "X" &&
    allBlock[4].innerHTML == "X" &&
    allBlock[8].innerHTML == "X"
  ) {
    alert("X win");
  }
  if (
    allBlock[2].innerHTML == "X" &&
    allBlock[4].innerHTML == "X" &&
    allBlock[6].innerHTML == "X"
  ) {
    alert("X win");
  }

  // For "O"
  // HORIZONTAL
  if (
    allBlock[0].innerHTML == "O" &&
    allBlock[1].innerHTML == "O" &&
    allBlock[2].innerHTML == "O"
  ) {
    alert("O win");
  }
  if (
    allBlock[3].innerHTML == "O" &&
    allBlock[4].innerHTML == "O" &&
    allBlock[5].innerHTML == "O"
  ) {
    alert("O win");
  }
  if (
    allBlock[6].innerHTML == "O" &&
    allBlock[7].innerHTML == "O" &&
    allBlock[8].innerHTML == "O"
  ) {
    alert("O win");
  }

  // VERTICAL
  if (
    allBlock[0].innerHTML == "O" &&
    allBlock[3].innerHTML == "O" &&
    allBlock[6].innerHTML == "O"
  ) {
    alert("O win");
  }
  if (
    allBlock[1].innerHTML == "O" &&
    allBlock[4].innerHTML == "O" &&
    allBlock[7].innerHTML == "O"
  ) {
    alert("O win");
  }
  if (
    allBlock[2].innerHTML == "O" &&
    allBlock[5].innerHTML == "O" &&
    allBlock[8].innerHTML == "O"
  ) {
    alert("O win");
  }

  // DIAGONAL
  if (
    allBlock[0].innerHTML == "O" &&
    allBlock[4].innerHTML == "O" &&
    allBlock[8].innerHTML == "O"
  ) {
    alert("O win");
  }
  if (
    allBlock[2].innerHTML == "O" &&
    allBlock[4].innerHTML == "O" &&
    allBlock[6].innerHTML == "O"
  ) {
    alert("O win");
  }
}
