// copy text function
export const copyText = function () {
  let textUse = document.getElementById("myInput");
  textUse.select();
  navigator.clipboard.writeText(textUse.value)
    .then(() => {
      // Create or update a UI element showing feedback
      const feedbackElement = document.getElementById("copy-feedback") || document.createElement("div");
      feedbackElement.textContent = `Copied to clipboard: ${textUse.value}`; // Update feedback text
      feedbackElement.id = "copy-feedback"; // Ensure the element has this ID
      document.body.appendChild(feedbackElement); // Append or re-append the element to the body

      // Optionally, remove or hide the feedback element after a few seconds
      setTimeout(() => {
        feedbackElement.style.display = "none"; // Hide the feedback message
        // or document.body.removeChild(feedbackElement); // Or remove the element from the DOM
      }, 2000); // Adjust time as needed
    })
    .catch((error) => {
      console.error("Error copying text: ", error);
    });
}

