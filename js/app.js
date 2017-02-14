$(document).ready(function() {

  var addZoomInAndButton = function(myClass) {
    $(myClass).hover(
      function(){
        $(this).find("img").addClass("zoom-in");
      },
      function(){
        $(this).find("img").removeClass("zoom-in");
      });
    }

    // $(".herotext").delay(500).addClass("show");


// hide nav after menu item has been clicked


if ($(".title-bar").css("display") !== "none") $("#top-menu").click(function(){
      if ($(this).css("display") == "flex") $(this).css({"display":"none"});
      });
//end

// show / hide navbar on scroll up / scroll down

var scrollTimeOut = true;
var lastYPos = 0;
var yPos = 0;
var yPosDelta = 5;
var nav = $('.title-bar');
var navHeight = nav.outerHeight();
var setNavClass = function() {
    scrollTimeOut = false;
    yPos = $(window).scrollTop();
    if(Math.abs(lastYPos - yPos) >= yPosDelta) {
        if (yPos > lastYPos && yPos > navHeight){
            nav.removeClass('show-nav').addClass('hide-nav');
        } else {
            nav.removeClass('hide-nav').addClass('show-nav');
        }
        if ($(".title-bar").css("display") !== "none")
          if($("#top-menu").css("display") == "flex") $("#top-menu").css({"display":"none"});
        lastYPos = yPos;
    }
};

$(window).scroll(function(e){
scrollTimeOut = true;
});

setInterval(function() {
if (scrollTimeOut) {
    setNavClass();
}
}, 250);




// back to top button fade-in and fade-out
// hide #back-top first
$("#back-top").hide();

// fade in #back-top
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });

  // scroll body to 0px on click
  $('#back-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 800);
    return false;
  });
});

// end


var getDayAndYear = function() {
  var d = new Date();
  var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  $("#currentyear").text(d.getFullYear());
  $("#day").text(weekday[d.getDay()]);
}


var showPerson = function() {
  $("#persons").children("div").click(function() {
    var description = $(".description", this).html();
    var title = $(".title", this).html();
    var name = $(".name", this).html();
    var img = $("img", this).attr("src");
    $("#person-img > img").attr("src", img);
    $("#person-text > .title").html(title);
    $("#person-text > .name").html(name);
    $("#person-text > .description").html(description);
  });
}

showPerson();




addZoomInAndButton(".img-container");
getDayAndYear();

})
