

$(document).ready(function () {
  $('#edit-button').click(function(event) {

    // Check if fields are empty
    var website = $('#website-input').val().trim();
    var username = $('#username-input').val().trim();
    var password = $('#password-input').val().trim();

    if (website === '' || username === '' || password === '') {
      event.preventDefault();
      $('div.error-message').text('Error: Oops! Did you forget to type something? Please fill in all fields and try again :)').slideDown();
      return;
    }
    $('div.error-message').slideUp();
  });
});


