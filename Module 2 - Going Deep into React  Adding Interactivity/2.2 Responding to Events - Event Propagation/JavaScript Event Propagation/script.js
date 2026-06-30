const parent = document.getElementById("parent");
const form = document.getElementById("form");
const button = document.getElementById("button");

// event capturing or trickling
parent.addEventListener("click", listener, {
  capture: true,
});

form.addEventListener("click", listener, {
  capture: true,
});

button.addEventListener("click", listener, {
  capture: true,
});

function listener(event) {
  //   console.log("Do something");
  // console.log(event.target);
  // console.log(event.currentTarget);
  //   console.log(this);
  // console.log(this.tagName);
  console.log(event.currentTarget.tagName);
}
