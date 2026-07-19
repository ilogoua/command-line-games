const input = process.argv.slice(2).join(" ");
if (!input) {
    console.log("Please enter a phrase to translate.");
    process.exit();
}
const words = input.split(" ");
// First prototype: processing only the first word
// const firstWord = words[0];
// const firstLetter = firstWord[0];
// const secondLetter = firstWord[1];
const vowels = ["a", "e", "i", "o", "u"];
const translateWords = words.map(function (word) {
    const firstLetter = word[0];
    const secondLetter = word[1] || "";
    const startWithvowel = vowels.includes(firstLetter.toLowerCase());
    const secondLetterIsvowel = vowels.includes(secondLetter.toLowerCase());

    if (startWithvowel) {
        return word + "way";
    }
    else if (!secondLetterIsvowel) {
        return word.slice(2) + firstLetter + secondLetter + "ay";
    }

    else {
        return word.slice(1) + firstLetter + "ay"
        
    }
});

console.log(translateWords.join(" "));
// console.log(words);
// console.log(firstWord);
// console.log(firstLetter);
// console.log(startWithvowel);

