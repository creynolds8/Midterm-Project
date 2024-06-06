

$(document).ready(function() {

  $('#edit-button').click(function(event) {
    // Check if fields are empty
    const website = $('#website-input').val().trim();
    const username = $('#username-input').val().trim();
    const password = $('#password-input').val().trim();

    if (website === '' || username === '' || password === '') {
      event.preventDefault();
      $('div.error-message').text('Error: Oops! Did you forget to type something? Please fill in all fields and try again :)').slideDown();
      return;
    }
    $('div.error-message').slideUp();
  });



  $('.create-account-button').on('click', function(event) {
    const website = $('#website-input').val().trim();
    const username = $('#username-input').val().trim();
    const password = $('#password-input').val().trim();

    if (website === '' || username === '' || password === '') {
      event.preventDefault();
      $('div.error-message').text('Error: Oops! Did you forget to type something? Please fill in all fields and try again :)').slideDown();
      return;
    }
    $('div.error-message').slideUp();
  });

  $('.password-create').on('click', function(event) {
    const lowercase = document.getElementById("lower-case").checked;
    const uppercase = document.getElementById("upper-case").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("special-chars").checked;
    const length = document.getElementById("length").value;

    if (length === 'false') {
      event.preventDefault();
      $('div.error-message').text('Please select a valid length and generate your password again').slideDown();
      return;
    }

    if (!lowercase && !uppercase && !numbers && !symbols) {
      event.preventDefault();
      $('div.error-message').text('Please select at least one box and generate your password again').slideDown();
      return;
    }
    $('div.error-message').slideUp();
  });


});







// $(document).ready(function () {
//   const handleFormSubmission = function() {
//     const website = $('#website-input').val().trim();
//     const username = $('#username-input').val().trim();
//     const password = $('#password-input').val().trim();

//     if (website === '' || username === '' || password === '') {
//       $('div.error-message').text('Error: Oops! Did you forget to type something? Please fill in all fields and try again :)').slideDown();
//       return false; // Prevent form submission
//     }
//     $('div.error-message').slideUp();
//   }
// });

