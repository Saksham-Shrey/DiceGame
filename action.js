let a = Math.floor(6 * Math.random() + 1),
  b = Math.floor(6 * Math.random() + 1);
switch (a) {
  case 1:
    document.querySelector(".dice .img1").src = "images/dice1.png";
    break;
  case 2:
    document.querySelector(".dice .img1").src = "images/dice2.png";
    break;
  case 3:
    document.querySelector(".dice .img1").src = "images/dice3.png";
    break;
  case 4:
    document.querySelector(".dice .img1").src = "images/dice4.png";
    break;
  case 5:
    document.querySelector(".dice .img1").src = "images/dice5.png";
    break;
  case 6:
    document.querySelector(".dice .img1").src = "images/dice6.png";
}
switch (b) {
  case 1:
    document.querySelector(".dice .img2").src = "images/dice1.png";
    break;
  case 2:
    document.querySelector(".dice .img2").src = "images/dice2.png";
    break;
  case 3:
    document.querySelector(".dice .img2").src = "images/dice3.png";
    break;
  case 4:
    document.querySelector(".dice .img2").src = "images/dice4.png";
    break;
  case 5:
    document.querySelector(".dice .img2").src = "images/dice5.png";
    break;
  case 6:
    document.querySelector(".dice .img2").src = "images/dice6.png";
}
a > b
  ? (document.querySelector(".container h1").innerHTML = "Player 1 Wins")
  : b > a
  ? (document.querySelector(".container h1").innerHTML = "Player 2 Wins")
  : (document.querySelector(".container h1").innerHTML = "Draw !!");
