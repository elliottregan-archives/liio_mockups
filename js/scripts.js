$(document).ready( function() {  

  $('#cal, #col').change(function() {
    if ($('#cal')[0].checked == true) {
      $('#stats').fadeOut();
      $('#photo_grid, button.new').delay(400).fadeIn();
    }
    else {
      $('#stats').delay(400).fadeIn();
      $('#photo_grid, button.new').fadeOut();
    }
  });
  
  $('.edit').click( function() {
    $(this).fadeOut();
    $(this).next('form').slideDown();
  })
  
  $('.cancel').click( function() {
    $(this).parent().parent().fadeOut()
    $(this).parent().parent().siblings('.edit').fadeIn()
  })
  
  $('button.new').click( function() {
    $('li.new_insp').slideDown()
  })
  
  $('button.close').click( function() {
    $('li.new_insp').slideUp()
  })
  
  $('#focus_areas li li').click( function() {
    $(this).toggleClass('selected')
  })

});