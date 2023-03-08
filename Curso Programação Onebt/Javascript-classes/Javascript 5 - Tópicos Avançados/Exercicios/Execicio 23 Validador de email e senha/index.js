function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const err = new Error("Email inválido");
    err.input = "email";
    throw err;
  }
}

function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/\d/) ||
    !password.match(/[^a-zA-Z\s0-9]/)
  ) {
    const err = new Error("Senha invalida.");
    err.input = "password";
    throw err;
  }
}

const userInputs = {
  name: document.querySelector("#name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
};

function resetFormeStyles(inputs) {
  Object.entries(inputs).forEach(([key, value]) => {
    value.classList.remove("success", "error");
    document.querySelector(`#${key}-error`).textContent = "";
  });
}

const form = document.querySelector("form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  resetFormeStyles(userInputs);

  try {
    userInputs.name.classList.add("success");
    validateEmail(userInputs.email.value);
    userInputs.email.classList.add("success");
    validatePassword(userInputs.password.value);
    userInputs.password.classList.add("success");
  } catch (err) {
    userInputs[err.input].classList.add("error");
    document.querySelector(`#${err.input}-error`).textContent = err.message;
  }
});
