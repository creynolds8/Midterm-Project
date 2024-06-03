//copy_to_clipboard.js

import { copyText } from "./copytext.js";

document.getElementsByClassName("account-button")
.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(copyText);
  const copyToClipboard = copyText();
  console.log(copyToClipboard);
  $('#clipboard-text').val(copyToClipboard);
});
