//copy_to_clipboard.js

import { copyText } from "./copytext.js";

const accountButtons = document.getElementsByClassName("account-button"); // Assuming it's the first one
console.log("Account button",accountButtons);
for(let accountButton of accountButtons)  {
  accountButton.addEventListener("click", function(event) {
    console.log("click event triggered on account button");
    copyText(); // This function now also handles showing feedback directly.
  });

}

