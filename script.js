const textArea = document.getElementById("inputText");
const result = document.getElementById("result");

function isVowel(text) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let char of text.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

function checkVowels() {
  const userInput = inputText.value;
  console.log(`The word "${userInput}" has ${isVowel(userInput)} vowels`);
  result.innerHTML = `The word "${userInput}" has ${isVowel(userInput)} vowels`;
  reset()
}

function reset() {
  inputText.value = "";
}
