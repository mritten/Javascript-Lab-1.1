const question = prompt("Would you like to play a game?");

if (question === "yes"||"y"){
const playerName = prompt(`What is your name?`);

let playerHealth = 40;
let grant = "Grant the Mighty Chicken";
let grantHealth = 10;
let winCount = 0;


while (playerHealth >=0 && winCount < 3) {
  playerHealth -= Math.floor((Math.random() * 2) + 1);
  grantHealth -= Math.floor((Math.random() * 2) + 1);
console.log(`${playerName} has ${playerHealth} left`)
console.log(`${grant} has ${grantHealth} left`)

if (grantHealth <= 0) {
  winCount++;
  grantHealth=10;
  console.log(`${playerName} has won.`);
}
  else {
  console.log(`${grant} has won.`);
  }
}
}else{
  console.log("Thanks");
}