$(document).ready(function(){


//Right nav
  $(".MenuIcon").click(function(){
    $(".MainMenu").css("right", "0px");
  });

  $("#close-icon").click(function(){
    $(".MainMenu").css("right", "-500px");
  });

  // List of tpe groups

  $(".tpe-link").click(function(){
    $(".info-groupe").css("visibility", "visible");
    $(".info-groupe").css("background", "red");
  });

  $(".close-icon").click(function(){
    $(".info-groupe").css("visibility", "hidden");
    $("body").css("background", "rgba(0,0,0,0)");
  });

//Chat area
  $(".profile-name").click(function(){
     $(".chat").css("visibility","visible");
  });

  $("::before").click(function(){
    $(".chat").css("visibility","hidden");
  });

});
