$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);

$(document).ready(function() {
  
  $("#tab1_content").hide();
  $("#tab2_content").hide();
  $("#tab3_content").hide();
  $("#tab4_content").show();

  $("#tab1").click(function() {
   
    $("#tab1_content").show();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
  });

  $("#tab2").click(function() {
   
    $("#tab2_content").show();
    $("#tab1_content").hide();
    $("#tab3_content").hide();
    $("#tab4_content").hide();
  });

  $("#tab3").click(function() {
    
    $("#tab3_content").show();
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab4_content").hide();
  });

  $("#tab4").click(function() {
   
    $("#tab4_content").show();
    $("#tab1_content").hide();
    $("#tab2_content").hide();
    $("#tab3_content").hide();
  });
});