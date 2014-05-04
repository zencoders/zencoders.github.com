$('a[href^="#"][data-animate]').live('click', function() {
  var hash = $(this).attr('href');
  var offset = $(hash).offset();
  if (offset) {
    $('html, body').animate({ scrollTop: offset.top }, 'slow');
    location.hash = hash;
    return false;
  }
});