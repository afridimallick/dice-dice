function rollDices()
{
var dice1 = rollDiceNumber();
var dice2 = rollDiceNumber();

changeDiceImg(dice1,dice2);


 function rollDiceNumber() {
 rn = 1 + (Math.floor(Math.random() * 6));
  return rn;
};

function changeDiceImg(n,m){
    document.querySelectorAll("img")[0].setAttribute("src", "images/dice"+n+".png");
    document.querySelectorAll("img")[1].setAttribute("src", "images/dice"+m+".png");
  return;
};

if (dice1 > dice2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!!! ";
}
else if (dice2 > dice1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!!! 🚩";
}
else {
document.querySelector("h1").innerHTML = "🎌 DRAW!!! 🎌";
}
};
