const input = document.querySelector('.input'); // search box
const searchIcon = document.getElementById('search-icon'); // magnifying glass

function searchWord() {
  const word = input.value.trim(); // jo word user ne type kiya
  if (!word) {
    alert("❗ Please type a word.");
    return;
  }

  // 🔹 Store the word & redirect
  localStorage.setItem("searchedWord", word);
  window.location.href = "result.html";
}

// Click or Enter event
searchIcon.addEventListener('click', searchWord);
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    searchWord();
  }
});
