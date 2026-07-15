const playerMove = process.argv[2];
const moves = ["rock", "paper", "scissors"];
if (!moves.includes(playerMove)) {
    console.log("Please choose rock, paper, or scissors.");
    process.exit();
}
const randomIndex = Math.floor(Math.random() * moves.length);
const computerMove = moves[randomIndex];

console.log(`You chose ${playerMove}. Computer chose ${computerMove}.`);

if (playerMove === computerMove) {
    console.log('It is a draw!');
} else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
) {
    console.log('You win!');
} else {
    console.log('You lose! :(');
}
