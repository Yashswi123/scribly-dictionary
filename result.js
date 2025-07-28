const resultDiv = document.getElementById('result');
const word = localStorage.getItem('searchedWord');

if (!word) {
  resultDiv.innerHTML = `<p class="status-message">❗ No word provided in URL.</p>`;
} else {
  resultDiv.innerHTML = `<p class="status-message">⏳ Searching...</p>`;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json())
    .then(data => {
      if (data.title === "No Definitions Found") {
        resultDiv.innerHTML = `<p class="status-message">❌ No meaning found.</p>`;
      } else {
        const wordText = data[0].word;
        const meaningObj = data[0].meanings[0];
        const partOfSpeech = meaningObj.partOfSpeech;
        const defs = meaningObj.definitions;
        const definition = defs[0].definition;
        const example = defs[0].example;

        let html = `<h2 class="word">${wordText}</h2>`;
        html += `<p class="part-of-speech">🏷️ ${partOfSpeech}</p>`;
        html += `<p class="meaning-text">💡 ${definition}</p>`;
        if (example) html += `<p class="example">📝 ${example}</p>`;

        resultDiv.innerHTML = html;
      }
    })
    .catch(() => {
      resultDiv.innerHTML = `<p class="status-message">⚠️ Error fetching data. Check internet.</p>`;
    });
}
