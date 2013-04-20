(function() {
  App.setUpNavigation = function() {
    $("#header nav").visualNav({
      selectedAppliedTo: "a",
      selectedClass: "current"
    });
  };
})();
