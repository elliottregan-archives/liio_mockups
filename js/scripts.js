$(document).ready( function() {

  data = [[[1, 2],[3,3],[5,7],[7,5],[9,5],[11,4]]];
 
  $.plot($('#pie_chart'), data); 
  
 
  var pie.data = [];
  var series = Math.floor(Math.random()*6)+3;
  for( var i = 0; i<series; i++){false
  	data[i] = { label: "Series"+(i+1), data: Math.floor(Math.random()*100)+1 }
  }

  $.plot($('#pie_chart'), pie.data, 
  {
    series: {
      pie: {
        show: true
      }
    }
  });

});