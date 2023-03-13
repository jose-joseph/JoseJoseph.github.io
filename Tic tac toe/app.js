var td = document.querySelectorAll("td");
var reset = document.querySelector("button");
var count = 0;
var maxMoves = 9; // number of squares on the board
var h1 = document.querySelector("h1");
var body = document.querySelector("body");
var gameOver = false;

for (var i = 0; i < td.length; i++) {
  td[i].addEventListener("click", function () {
    count++;
    if (count % 2 === 0) {
      this.textContent = "O";
    } else {
      this.textContent = "X";
    }
    checkWin();
  });
}

reset.addEventListener("click", function () {
  for (var i = 0; i < td.length; i++) {
    td[i].textContent = "";
    td[i].classList.remove("xboxred");
    td[i].classList.remove("oboxred");
  }
  h1.classList.remove("xwin");
  h1.classList.remove("owin");
  h1.textContent = "Tic Tac Toe";
  count = 0;
  gameOver = false;
});

function checkWin() {
  if (
    td[0].textContent === td[1].textContent &&
    td[0].textContent === td[2].textContent &&
    td[0].textContent !== ""
  ) {
    endGame(td[0].textContent);
  } else if (
    td[6].textContent === td[7].textContent &&
    td[6].textContent === td[8].textContent &&
    td[6].textContent !== ""
  ) {
    endGame(td[6].textContent);
  } else if (
    td[3].textContent === td[4].textContent &&
    td[3].textContent === td[5].textContent &&
    td[3].textContent !== ""
  ) {
    endGame(td[3].textContent);
  } else if (
    td[0].textContent === td[4].textContent &&
    td[0].textContent === td[8].textContent &&
    td[0].textContent !== ""
  ) {
    endGame(td[0].textContent);
  } else if (
    td[2].textContent === td[4].textContent &&
    td[2].textContent === td[6].textContent &&
    td[2].textContent !== ""
  ) {
    endGame(td[2].textContent);
  } else if (
    td[0].textContent === td[3].textContent &&
    td[0].textContent === td[6].textContent &&
    td[0].textContent !== ""
  ) {
    endGame(td[0].textContent);
  } else if (
    td[1].textContent === td[4].textContent &&
    td[1].textContent === td[7].textContent &&
    td[1].textContent !== ""
  ) {
    endGame(td[1].textContent);
  } else if (
    td[2].textContent === td[5].textContent &&
    td[2].textContent === td[8].textContent &&
    td[2].textContent !== ""
  ) {
    endGame(td[2].textContent);
  } else if (count === maxMoves) {
    // all squares filled, no one won
    h1.textContent = "It's a Draw!";
    gameOver = true;
  }
}

function endGame(winner) {
  if (winner === "X") {
    h1.classList.add("xwin");
    h1.textContent = "Player X Wins!";
  } else {
    h1.classList.add("owin");
    h1.textContent = "Player O Wins!";
  }
  gameOver = true;
}

