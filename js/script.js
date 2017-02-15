$(document).ready(function() {



// hide nav after menu item has been clicked


if ($(".title-bar").css("display") !== "none") $("#top-menu").click(function() {
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

// end


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

var changePersonTitleOnXs = function() {
    $(".img-container").each(function() {
        var name = $(".name", this).html();
        var title = $(".title", this).html();
        $(this).append('<div class="person-under show-for-small-only"><p class="name">' + name + '</p><p class="title">' + title + '</p></div>');
    });
}


var overlay = function(myClass) {
  $(myClass).mouseenter(function(){
    var imgWidth = $(this).find('img').outerWidth();
    var imgHeight = $(this).find('img').outerHeight();
    $(".overlay", this).css( {"width": imgWidth, "height": imgHeight} );
    $(this).addClass("hover");
  })
  // handle the mouseleave functionality
  .mouseleave(function(){
    $(this).removeClass("hover");
  });
}

showPerson();
overlay(".img-container");
changePersonTitleOnXs();

var controller = new ScrollMagic.Controller();

var animateHeroText = function() {
  // Animation will be ignored and replaced by scene value in this example
  var tween = TweenMax.to('#hero', 0.5, {
    autoAlpha: 0,
    y: 150,
    scale: 0.7,
    force3D:true
  });

  new ScrollMagic.Scene({
    triggerElement: '#whatwedo',
    offset: -300,
    duration: 600
  })
  .setTween(tween)
  .addTo(controller);
};

animateHeroText();


window.sr = ScrollReveal({ reset: true });
window.sr = ScrollReveal();
sr.reveal('.features', {duration: 300, viewFactor: 1, mobile: false});
sr.reveal("#whatwedo-logo", {duration: 300, viewFactor: 0.5, mobile: false});
sr.reveal('#person', { duration: 300, viewFactor: 1, mobile: false, reset: false});

sr.reveal('.partner', { duration: 2000, mobile: false, reset: true}, 50);


});
