(function() {
  App.setUpFlickr = function() {
    $('body').append('<script type="text/javascript" src="http://api.flickr.com/services/feeds/photos_public.gne?id=95031448@N03&lang=en-en&format=json"></script>');
  };

  window.jsonFlickrFeed = function(response) {
    var container = $('#photo-stream');
    var list = container.find('ul');
    var items = response.items;
    for (var i = 0; i < items.length; i++) {
      list.append('<li class="photo"><img height="300" width="300" src="' + items[i].media.m + '" /></div>')
    }

    container.jCarouselLite({
      btnNext: ".next",
      btnPrev: ".prev",
      speed: 0,
      visible: 6
    });
  }
})();
