const list = document.getElementById("list");

list.addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    if (e.target.innerText === "JavaScript") {
      e.target.style.backgroundColor = "yellow";
    } else {
      e.target.style.backgroundColor = "tomato";
    }
  }
});

function addElement() {
  const newElement = document.createElement("li");
  newElement.textContent = "Dot Net";
  list.appendChild(newElement);
}
