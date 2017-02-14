$(function() {
    // Init ScrollMagic Controller
    var controller = new ScrollMagic.Controller();

    // animation for hero text

var animateHeroText = function() {
  // Animation will be ignored and replaced by scene value in this example
  var tween = TweenMax.to('#hero', 0.5, {
    autoAlpha: 0,
    y: 150,
    scale: 0.7,
    force3D:true
  });

  // Create the Scene and trigger when visible
  new ScrollMagic.Scene({
    triggerElement: '#whatwedo',
    offset: -80,
    duration: 300 /* How many pixels to scroll / animate */
  })
  .setTween(tween)
  .addTo(controller)
  .addIndicators(); // Add debug indicators fixed on right side
 };

 var colornav = new TimelineMax()
     .add([
     TweenMax.to(".nav-bg", 0.2, {
             backgroundColor: "white"
         }),
     TweenMax.to(".nav-menu a ", 0.2, {
             color: "#666"
         }),
     TweenMax.to(".nav-logo", 0.2, {
             autoAlpha: 1,force3D:true
         }),
     TweenMax.to("nav", 0.2, {
             className: "+=pinned"
         }),
     TweenMax.to(".nav-mobile", 0.2, {
             color: "#666"
         })
 ]);


     var scene = new ScrollMagic.Scene({
         triggerHook: "onLeave",
         offset: 520,
         tweenChanges: true/*,
         loglevel: 3*/
     })
     .setPin("nav")
     .setTween(colornav)
     .on("start end", updateBox)
//     .on("end", function (e) {
//         if (e.target.parent().info("scrollDirection") == "REVERSE") { closeMenu(); }
//     })
//     .on("reverse", closeMenu)
     .addTo(controller);

     function closeMenu() {
         $( ".nav-menu" ).removeClass( "showmenu" );
         $( ".nav-mobile" ).removeClass( "showmenu" );
     };

     function updateBox(e) {
         if (e.type == "start") {
             $("nav").addClass("pinned");
         } else {
             $("nav").removeClass("pinned");
         }
     }

animateHeroText();
colornav();



});
