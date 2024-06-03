//copy_to_clipboard.js

import { copyText } from "./copytext.js";

document.getElementById("username")
.addEventListener("copy", function (event) {
  event.preventDefault();
  console.log(copyText);
  const copyToClipboard = copyText();
  console.log(copyToClipboard);
  $('#clipboard-text').val(copyToClipboard);
});

document.getElementById("password")
.addEventListener("copy", function (event) {
  event.preventDefault();
  console.log(copyText);
  const copyToClipboard = copyText();
  console.log(copyToClipboard);
  $('#clipboard-text').val(copyToClipboard);
});
