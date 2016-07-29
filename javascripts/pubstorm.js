$(document).ready( function() {
  $('#mmenu').click( function() {
    $('#mobile-nav').show();
    $('#main-body').css('overflow-y', 'hidden');
  });

  $('#mmenu-x').click( function() {
    $('#mobile-nav').hide();
    $('#main-body').css('overflow-y', 'auto');
  });
});
