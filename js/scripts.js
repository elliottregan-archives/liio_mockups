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
  
  $('#queue li').click( function(e) {
    if (this == e.target) {
      $(this).children('.sub_content').slideToggle()
      $(this).toggleClass('clickable expanded')
    }
  })
  
  $('button.reply').click( function() {
    $(this).parent().siblings('form').slideToggle()
    console.log('asdf')
  })
  
  $('button.create').click( function() {
    $(this).parent().siblings('form').slideToggle()
    console.log('asdf')
  })
  

});