const args = process.argv.slice(2);
const phrase = args[0];
const shift = Number(args[1]);
if (!phrase || Number.isNaN(shift)) {
    console.log('Please enter a phrase and a numeric shift.');
    process.exit();
}
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const characters = phrase.split("");
const encryptedCharacters = characters.map(function (character) {
    const characterIndex = alphabet.indexOf(character.toLowerCase());
    if (characterIndex === -1) {
        return character;
    }
    const shiftedIndex = ((characterIndex + shift) % alphabet.length + alphabet.length) %
        alphabet.length;
    const shiftedCharacter = alphabet[shiftedIndex];
    const isUpperCase = character === character.toUpperCase();
    if (isUpperCase) {
        return shiftedCharacter.toUpperCase();
    }
    return shiftedCharacter;
});
const encryptedPhrase = encryptedCharacters.join("");

console.log(encryptedPhrase);