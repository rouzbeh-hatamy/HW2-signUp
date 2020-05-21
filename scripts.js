/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */

$('.color div').click(function() {
  $color = $(this).css('background-color');
  $(this).css('background-color', $('.leftHandSide').css('background-color'));
  $('.leftHandSide').css('background-color', $color);
});
b = true;
$('.hamMenu').click(function() {
  if (b) {
    $('.rightHandSide').css('width', '90%');
    $('.picLeft').toggle();
    $('.textLeft').toggle();
    $('.leftHandSide').css('width', '10%');
    $('.color').css('flex-direction', 'column');
    b = !b;
  } else {
    $('.rightHandSide').css('width', '50%');
    $('.picLeft').toggle();
    $('.textLeft').toggle();
    $('.leftHandSide').css('width', '50%');
    $('.color').css('flex-direction', 'row');
    b = !b;
  }
});
