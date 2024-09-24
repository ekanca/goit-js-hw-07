document.getElementById("name-input").addEventListener("input", function () {
  const input = this.value.trim();
  const output = input === "" ? "Anonymous" : input;
  document.getElementById("name-output").textContent = output;
});
