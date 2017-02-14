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
     TweenMax.to(".darkbg", 0.2, {
             background: "white",
             position: "fixed",
             top: "0",
             bottom: "auto"
         }),
     TweenMax.to(".nav-menu a", 0.2, {
             color: "#333"
         }),
     TweenMax.to(".nav-logo", 0.2, {
             autoAlpha: 1
         }),
    TweenMax.to("nav", 0.2, {
           // className: "+=sticky ontop"
         })
 ]);


     var scene = new ScrollMagic.Scene({
         triggerHook: "onLeave",
         offset: 550,
         tweenChanges: true/*,
         loglevel: 3*/
     })

     .setTween(colornav)
     .addTo(controller);




     // build tween
     var animate2 = new TimelineMax()
         .add([
             TweenMax.to(".feature-logo", 0.5, {
             autoAlpha: 1,
             ease:Power3.easeInOut
             })
     ]);

     // build scene
     var scene3 = new ScrollMagic.Scene({
             triggerElement: "#people",
             triggerHook: "onCenter",
             reverse: false
         })
         .setTween(animate2)
         .addTo(controller);



animateHeroText();



});
