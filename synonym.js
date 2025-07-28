function handleSearch() {
  const word = document.getElementById("inputWord").value.trim();

  if (!word) {
    alert("❗ Please enter a word");
    return;
  }

  localStorage.setItem("searchedSynonymWord", word);
  window.location.href = "synonym-result.html";
}

// 🔘 Button click
document.getElementById("searchBtn").addEventListener("click", handleSearch);

// ⌨️ Enter key press
document.getElementById("inputWord").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); // prevent form reload
    handleSearch();
  }
});
