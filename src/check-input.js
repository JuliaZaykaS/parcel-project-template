$(document).ready(function () {
  $(' .form-margin .button').attr('disabled', true);
  $('.form-margin input').on('input click change', function () {
    if (
      $('input[name="user-name"]').val() != '' &&
      $('input[name="user-tel"]').val() != ''
    ) {
      $(' .form-margin .button').attr('disabled', false);
    } else $(' .form-margin .button').attr('disabled', true);
  });
});
