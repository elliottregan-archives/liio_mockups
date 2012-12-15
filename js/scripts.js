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
  
  $('.tab_set li').click( function() {
    var tab_id = this.id;
    var content_id = tab_id.substring(0, tab_id.length-4)
    
    $('.tab_set li').removeClass('current')
    $(this).addClass('current')
    $('.sub_tab').hide()
    $('#' + content_id).show()
  })
  
  $('.column_nav ul > li').click(function() {
    $(this).addClass('selected')
    $(this).siblings().removeClass('selected')
    $(this).siblings().children('ul').hide()
    $(this).siblings().children().children('ul').hide()
    $(this).children('ul').show()
  
  })

});