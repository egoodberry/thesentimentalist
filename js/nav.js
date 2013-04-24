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
  };
})();
