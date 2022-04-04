jQuery(document).ready(function($){
  AOS.init();
  $('.box').removeClass('aos-animate');
  $('.load-video .btn-play').on('click',function(){
    $('.load-video').addClass('none');
    $('.box').addClass('aos-animate');
  });
  const boxH = $('.box').outerWidth();
  $('.box').css('height',boxH);
  $('.box').on('click',function(){
    $('.box,.animation-bg span,.container-reply h2,.img-reply').removeClass('aos-animate');
    setTimeout(function() {
        $('.container-reply h2,.animation-bg span,.img-reply').addClass('aos-animate');
    }, 400);
    const data_value = $(this).attr('data-success');
    const color = $(this).attr('data-color');
    if (data_value == 'true') {
        console.log(data_value);
        $('.container-reply .container-success').css('background', color);
        $('.animation-bg.star').addClass('visible')
        $('.success-reply').addClass('visible');
        $('.failure-reply').removeClass('visible');
        $('.animation-bg.cloud').removeClass('visible')
    }else{
      console.log('fallito');
      $('.container-reply .container-failure').css('background', color);
      $('.animation-bg.star').removeClass('visible')
      $('.animation-bg.cloud').addClass('visible')
      $('.success-reply').removeClass('visible');
      $('.failure-reply').addClass('visible');
    }
    $('.container-reply').addClass('activate');
    setTimeout(function(){
      $('.load-video').removeClass('none');
      $('.success-reply,.failure-reply').removeClass('visible');
      $('.container-reply.activate').removeClass('activate');
      $('.failure-reply,.success-reply').removeClass('activate');
    },10000);
  });
});
