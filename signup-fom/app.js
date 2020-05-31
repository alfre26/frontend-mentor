const btn = document.getElementById("btn");
const first = document.getElementById("firstname");
const last = document.getElementById("lastname");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const rows = document.querySelectorAll(".row");
const errors = document.querySelectorAll(".error");
const valids = document.querySelectorAll(".valid");

const input = document.getElementsByTagName("input");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (first.value === "") {
    getError(0);
  }
  if (last.value === "") {
    getError(1);
  }
  if (email.value === "") {
    getError(2);
  }
  if (pass.value === "") {
    getError(3);
  }
});

function getError(input) {
  rows[input].style.border = "2px solid var(--red)";
  errors[input].style.display = "block";
  valids[input].style.display = "block";
}
