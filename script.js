const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const paragraph = document.querySelector("p");

function handleSubmit(event) {
  event.preventDefault();
  if (fname.value === "" || lname.value === "") {
    paragraph.textContent = "You need to fill in both names";
  } else {
    console.log(`${fname.value} ${lname.value}`);
    fname.value = "";
    lname.value = "";
  }
}

form.addEventListener("submit", handleSubmit);
