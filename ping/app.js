const btn = document.getElementById("btn");
const email = document.getElementById("email");
const valid = document.querySelector(".valid");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value !== "") {
    if (!validateEmail(email.value)) {
      email.style.border = "1px solid red";
      valid.style.display = "block";
    } else {
    }
  } else {
    email.style.border = "1px solid red";
    valid.style.display = "block";
  }
});

function validateEmail(email) {
  const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
