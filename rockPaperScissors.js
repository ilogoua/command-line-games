const playerMove = process.argv[2];
const moves = ['rock', 'paper', 'scissors'];
if (!moves.includes(playerMove)) {
    console.log('Please choose rock, paper, or scissors.');
    process.exit();
};
const randomIndex = Math.floor(Math.random() * moves.length);
const computerMove = moves[randomIndex];

console.log(`You chose ${playerMove}.Computer chose ${computerMove}.`);



