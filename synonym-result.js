const resultDiv = document.getElementById('result');
const wordDisplay = document.getElementById('wordDisplay');
const word = localStorage.getItem('searchedSynonymWord');

if (!word) {
  resultDiv.innerText = "❗ No word provided.";
} else {
  wordDisplay.innerText = word;
  resultDiv.innerText = "⏳ Searching for synonyms...";

  fetch(`https://api.datamuse.com/words?rel_syn=${word}`)
    .then(response => response.json())
    .then(data => {
      if (data.length === 0) {
        resultDiv.innerText = "❌ No synonyms found.";
      } else {
        resultDiv.innerHTML = data.map(item => `🔹 ${item.word}`).join('<br>');
      }
    })
    .catch(error => {
      resultDiv.innerText = "⚠️ Error fetching synonyms.";
      console.error(error);
    });
}
