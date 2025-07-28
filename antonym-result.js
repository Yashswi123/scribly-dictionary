// antonym-result.js

document.addEventListener("DOMContentLoaded", async () => {
  const resultDiv = document.getElementById("result");
  const wordDisplay = document.getElementById("wordDisplay");
  const params = new URLSearchParams(window.location.search);
  const word = params.get("word");

  if (!word) {
    wordDisplay.textContent = "❗ No word entered.";
    resultDiv.textContent = "";
    return;
  }

  wordDisplay.textContent = `🔍 ${word}`;

  try {
    const response = await fetch(`https://api.datamuse.com/words?rel_ant=${word}`);
    const data = await response.json();

    if (data.length === 0) {
      resultDiv.textContent = `No antonyms found for "${word}".`;
    } else {
      const antonyms = data.map(item => item.word).join(", ");
      resultDiv.textContent = antonyms;
    }
  } catch (error) {
    resultDiv.textContent = "❌ Failed to fetch antonyms.\n" + error.message;
  }
});
