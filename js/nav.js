(function() {
  App.setUpNavigation = function() {
    $("#header nav").visualNav({
      selectedAppliedTo: "a",
      selectedClass: "current",
      changed: function(e, el) {
        var atTop = (el.length === 0);
        if (atTop) {
          $('#back-to-top').fadeOut();
        }
        else {
          $('#back-to-top').fadeIn();
        }
      }
    });
  };
})();
