

$(document).ready(function () {
  $('#edit-button').click(function (event) {

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
});

$(document).ready(function () {
  $('#creatAccount').click(function (event) {

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

