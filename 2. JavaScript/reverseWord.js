// Take a sentence as an input and reverse every word in that sentence. Example - This is a sunny day > shiT si a ynnus yad.
function reverseWord(word) {
    let reversed = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    return reversed;
}

function reverseWordsInSentence(sentence) {
    let words = [];
    let currentWord = '';
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== ' ') {
            currentWord += sentence[i];
        } else {
            words.push(currentWord);
            currentWord = '';
        }
    }
    words.push(currentWord);

    let reversedWords = [];
    for (let i = 0; i < words.length; i++) {
        reversedWords.push(reverseWord(words[i]));
    }

    return reversedWords.join(' ');
}

let inputSentence = prompt("Enter a sentence:");
let reversedSentence = reverseWordsInSentence(inputSentence);

console.log("Reversed Sentence:", reversedSentence);
