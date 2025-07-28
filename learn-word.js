const wordDisplay = document.getElementById("randomWord");
const meaningDisplay = document.getElementById("meaning");
const newWordBtn = document.getElementById("newWordBtn");

async function loadValidWord(attempt = 1) {
  wordDisplay.innerText = "🔄 Loading...";
  meaningDisplay.innerText = "";

  try {
    const wordRes = await fetch("https://random-word-api.herokuapp.com/word");
    const [word] = await wordRes.json();

    const meaningRes = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await meaningRes.json();

    const definition = data[0]?.meanings[0]?.definitions[0]?.definition;

    if (definition) {
      wordDisplay.innerText = `🧠 ${word}`;
      meaningDisplay.innerText = `📖 ${definition}`;
    } else {
      if (attempt < 5) {
        loadValidWord(attempt + 1); // Retry
      } else {
        wordDisplay.innerText = "❌ No good word found";
        meaningDisplay.innerText = "Please try again.";
      }
    }
  } catch (error) {
    if (attempt < 5) {
      loadValidWord(attempt + 1); // Retry on error too
    } else {
      wordDisplay.innerText = "❌ Error fetching word";
      meaningDisplay.innerText = "Please try again.";
      console.error(error);
    }
  }
}

newWordBtn.addEventListener("click", () => loadValidWord());

loadValidWord(); // On page load
