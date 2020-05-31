const btn = document.getElementById("btn");
const border = document.querySelector(".form");
const valid = document.querySelector(".valid");
const input = document.getElementById("input");
const error = document.querySelector(".error");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    border.style.border = "2px solid red";
    valid.style.display = "block";
    error.style.display = "block";
  }
});

input.addEventListener("keyup", () => {
  if (input.value !== "") {
    border.style.border = "2px solid hsl(0, 36%, 70%)";
    valid.style.display = "none";
    error.style.display = "none";
  }
});
