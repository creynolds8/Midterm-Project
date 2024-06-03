// copy text function
export const copyText = function () {
  let textUse = document.getElementById("myInput");
  textUse.select();

  //copies the text in the text field
  navigator.clipboard.writeText(textUse.value);

  alert(`Copy to clipboard: {textUse.value}`)
}



