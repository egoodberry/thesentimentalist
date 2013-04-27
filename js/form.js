(function() {
  App.setUpForm = function() {
    $('form').submit(function() {
      $(this)[0].reset();
    });
  };
})();
