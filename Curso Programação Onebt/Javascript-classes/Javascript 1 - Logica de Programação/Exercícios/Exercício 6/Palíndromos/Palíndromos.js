const word = prompt("report a word: ");
let invertedWord = "";

// macarrao
for (let i = word.length - 1; i >= 0; i--) {
  invertedWord += word[i];
}
if (word === invertedWord) {
  alert(word + "it's a palindrome! ");
} else {
  alert(word + "it's not a palindrome! \n\n" + word + " !== " + invertedWord);
}
