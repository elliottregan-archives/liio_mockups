$(document).ready( function() {

  data = [[[1, 2],[3,3],[5,7],[7,5],[9,5],[11,4]]];
  
  options = {
    series: {
      lines: {show: true},
      
      points: { show:true},
      
      hoverable: true
    }
    

  }
 
  $.plot($('#progress_graph'), data, options); 
  
 
//  var pieData = [];
//  var series = Math.floor(Math.random()*6)+3;
//  for( var i = 0; i<series; i++){false
//  	data[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 }
//  }
//
//  $.plot($('#pie_chart'), pieData, 
//  {
//    series: {
//      pie: {
//        show: true
//      }
//    }
//  });


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

});