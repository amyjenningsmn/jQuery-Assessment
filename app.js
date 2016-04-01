$(function() {

var genTimes = 0;

$(".generate").on("click", function(){
  genTimes++;
  $(".containerSpace").append("<div class=\"container\">CONTAINER</div>");
  $(".container").last().append("<button class=\"eraseButton\">DELETE</button>");
  $(".container").last().append("<button class=\"change\">CHANGE</button>");

  $(".timesClicked").html(genTimes);

  $(".change").on("click", function(){
    $(this).parent().css("background-color", "yellow");
  })

  $(".eraseButton").on("click", function(){
    $(this).parent().remove();

  })


})



// closing tag below for the doc ready
})
