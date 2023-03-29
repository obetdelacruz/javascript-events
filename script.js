const button = document.querySelector("button");

function displayMessage() {
  return alert("yay! you did it");
}

button.addEventListener("click", displayMessage);
