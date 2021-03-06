$(document).ready(function () {
  $(' .form-margin .button').attr('disabled', true);
  $('.form-margin input').on('input click change', function () {
    $(' .form-margin .button').attr('disabled', true);
    var name = $('input[name="user-name"]').val();
    var phone = $('input[name="user-tel"]').val();
    if (name != '' && phone != '') {
      if (name.length > 1 && phone.length == 18) {
        $(' .form-margin .button').attr('disabled', false);
      }
    } else $(' .form-margin .button').attr('disabled', true);
  });
});
