document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".input");

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const word = input.value.trim();

      if (word !== "") {
        // Redirect with query param
        window.location.href = `antonym-result.html?word=${encodeURIComponent(word)}`;
      } else {
        alert("Please enter a word.");
      }
    }
  });
});
