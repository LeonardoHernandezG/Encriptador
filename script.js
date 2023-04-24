const encryptionKeys = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};

function encryptText(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    if (encryptionKeys[char]) {
      encryptedText += encryptionKeys[char];
    } else {
      encryptedText += char;
    }
  }
  return encryptedText;
}

function decryptText(text) {
  let decryptedText = "";
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    let isSeparator = false;
    for (const key in encryptionKeys) {
      if (text.substr(i, encryptionKeys[key].length) === encryptionKeys[key]) {
        decryptedText += key;
        i += encryptionKeys[key].length - 1;
        isSeparator = true;
        break;
      }
    }
    if (!isSeparator) {
      decryptedText += char;
    }
  }
  return decryptedText;
}

const inputText = document.getElementById("input-text");
const encryptButton = document.getElementById("encrypt-button");
const decryptButton = document.getElementById("decrypt-button");
const outputText = document.getElementById("output-text");

encryptButton.addEventListener("click", () => {
  const encryptedText = encryptText(inputText.value.toLowerCase());
  outputText.value = encryptedText;
});

decryptButton.addEventListener("click", () => {
  const decryptedText = decryptText(outputText.value.toLowerCase());
  inputText.value = decryptedText;
});