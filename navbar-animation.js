$('#open-menu').on('show.bs.collapse', function(){

  $('.topCasaFina-banner').css('transform', 'translate(-50%, 10%)');

});

$('#open-menu').on('hide.bs.collapse', function(){

    $('.topCasaFina-banner').css('transform', 'translate(-50%, -50%)');
  
  });