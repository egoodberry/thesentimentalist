(function() {
  App.setUpNavigation = function() {
    // smooth scrolling nav
    $("#header nav").visualNav({
      selectedAppliedTo: "a",
      selectedClass: "current"
    });

    // back to top link
    $(window).bind('scroll', function() {
      var atTop = ($(window).scrollTop() < 450);
      if (atTop) {
        $('#back-to-top').fadeOut();
      }
      else {
        $('#back-to-top').fadeIn();
      }
    });

    // display "scroll down" if visitor hasn't budged in 8 seconds
    window.setTimeout(function() {
      if ($(window).scrollTop() === 0) {
        $('#scroll-down').fadeIn();

        $(window).bind('scroll', function() {
          $('#scroll-down').fadeOut();
        });
      }
    }, 8000);
  };
})();
