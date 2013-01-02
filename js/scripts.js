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
  
  $('#queue li.clickable').not('.completed').click( function(e) {
    if ((this == e.target) || (e.target.className == 'title')) {
      $(this).children('.sub_content').slideToggle()
      $(this).toggleClass('clickable expanded')
    }
  })
  
  $('button.reply').click( function() {
    $(this).parent().siblings('form').slideToggle()
  })
  
  $('button.cancel_msg').click( function() {
    $(this).parent().slideToggle()
  })
  
  $('.dismiss').click( function() {
    $(this).parent().fadeOut();
  })
  
  $('ul.users li:not(.new)').click( function() {
    $(this).parent().siblings('form').slideUp()
    $(this).parent().siblings('form:not(.invite)').slideDown()
  })
  
  $('ul.users li.new').click( function() {
    $(this).parent().siblings('form').slideUp()
    $(this).parent().siblings('form.invite').slideDown()
  })
  
  $('#reflect ul.users li').click( function() {
    $(this).parent().parent().siblings('.msg').slideUp()
    $(this).parent().parent().siblings('.msg').slideDown()
  })
  
  $('button.create').click( function() {
    $(this).parent().siblings('form').slideToggle()
  })
  
  $('button.create_step').click( function() {
    $(this).parent().siblings('ul').children('.new_step').slideToggle()
  })
  
  $('button.expand').click( function() {
    $(this).parent().siblings('fieldset').slideToggle()
    $(this).siblings('dl').slideToggle()
    
    var text = $(this).text()
    $(this).text(
      text == "expand" ? "collapse" : "expand"
    )
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
  
  var coachingWidth = $('ul.coaching_tips').children().length * 234 + 12
  
  $('ul.coaching_tips').css('width', coachingWidth)

});