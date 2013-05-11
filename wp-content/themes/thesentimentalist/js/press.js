(function() {
  App.setUpPress = function() {
    $('#press-thumbnail-wrapper').on('click', '.press-item-thumbnail', function() {
      $('.press-item-thumbnail').removeClass('active');
      $(this).addClass('active');
      var postId = $(this).data('press-id');
      var postDetail = $('.press-item[data-press-id=' + postId + ']')
      $('.press-item-detail .inner').empty().html(
        '<div class="contents">' + postDetail.html() + '</div>'
      );
      $('.press-item-detail').slideDown();

      $('.press-item-detail .close').click(function() {
        $('.press-item-detail').slideUp();
      });
    });

    var pressCount = $('.press-item-thumbnail').size();
    if (pressCount > 4) {
      $('#press-thumbnail-wrapper').jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        speed: 0,
        visible: 4.5
      });
    }
    else {
      $('#press').addClass('disabled');
    }
  };
})();
