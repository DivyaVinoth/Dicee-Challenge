var diceNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src",`images\\dice${diceNumber1}.png`);

var diceNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src",`images\\dice${diceNumber2}.png`);

console.log(diceNumber1);
console.log(diceNumber2);

if(diceNumber1 > diceNumber2){
  document.querySelector("h1").textContent="🚩Player 1 wins!";
} else if (diceNumber1 < diceNumber2){
  document.querySelector("h1").textContent="Player 2 wins!🚩";
} else if(diceNumber1 === diceNumber2){
  document.querySelector("h1").textContent="Draw";
}
