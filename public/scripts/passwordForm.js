import { generatePassword } from "./randompassword.js";

document
  .getElementById("password-generator")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const passwordOptions = {
      length: document.getElementById("length").value,
      lowercase: document.getElementById("lower-case").checked,
      uppercase: document.getElementById("upper-case").checked,
      numbers: document.getElementById("numbers").checked,
      specialChars: document.getElementById("special-chars").checked,
    };
    console.log(passwordOptions);
    const password = generatePassword(
      passwordOptions.length,
      passwordOptions.lowercase,
      passwordOptions.uppercase,
      passwordOptions.specialChars,
      passwordOptions.numbers
    );
    console.log(password);
  });
