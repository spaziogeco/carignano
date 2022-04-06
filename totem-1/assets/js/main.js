jQuery(document).ready(function($){
  AOS.init();
  $('.box').removeClass('aos-animate');
  $('.load-video .btn-play').on('click',function(){
    document.getElementById('vid').play();
    $('.load-video').addClass('none');
    $('.box').addClass('aos-animate');
  });
  const boxH = $('.box').outerWidth();
  $('.box').css('height',boxH);
  $('.box').on('click',function(){
    $('.box,.animation-bg span,.container-reply h2,.img-reply,.next_answer a,.back').removeClass('aos-animate');
    setTimeout(function() {
        $('.container-reply h2,.animation-bg span,.img-reply,.next_answer a,.back').addClass('aos-animate');
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
    // setTimeout(function(){
    //   $('.load-video').removeClass('none');
    //   $('.success-reply,.failure-reply').removeClass('visible');
    //   $('.container-reply.activate').removeClass('activate');
    //   $('.failure-reply,.success-reply').removeClass('activate');
    // },10000);
  });

    //Domande
    let domanda_1 = 'Cosa produceva la vecchia fabbriasdc’è il Museo Civico Giacomo Rodolfo di Carignano?';
    let domanda_2 = 'La struttura dell’antico lanificio, cos’è diventato oggi ?';
    let domanda_3 = 'A cosa serviva il rocchetto rappresentato sul totem?';
    let domanda_4 = 'domanda 4';
    let r_1 = 'Scarpe';
    let r_2 = 'Lana';
    let r_3 = 'Automobili';
    let r_4 = 'Mattoni';
    let r_5 = 'museo';
    let r_6 = 'libreria';
    let r_7 = 'negozio';
    let r_8 = 'ospedale';
    let r_9 = 'srotolare il filo';
    let r_10 = 'produrre seta';
    let r_11 = 'contenere il filo';
    let r_12 = 'rompere il filo';
    let r_13 = 'dasdd4';
    let r_14 = 'asddd';
    let r_15 = 'asd2';
    let r_16 = 'asd';

    $('.next,.next-2,.next-3,.next-final').hide();

      $('.answer h2').text(domanda_1);
      $('.box:first-child').attr('data-success','false').find('h3').text(r_1);
      $('.box:first-child').find('img').attr('src','assets/img/1.png');
      $('.box:nth-child(2)').attr('data-success','true').find('h3').text(r_2);
      $('.box:nth-child(2)').find('img').attr('src','assets/img/2.png');
      $('.box:nth-child(3)').attr('data-success','false').find('h3').text(r_3);
      $('.box:nth-child(3)').find('img').attr('src','assets/img/3.png')
      $('.box:nth-child(4)').attr('data-success','false').find('h3').text(r_4);
      $('.box:nth-child(4)').find('img').attr('src','assets/img/4.png');
      $(this).hide();
      $('.next-1').show();
      $('.success-reply,.failure-reply').removeClass('visible');
      $('.container-reply.activate').removeClass('activate');
      $('.failure-reply,.success-reply').removeClass('activate');
      setTimeout(function() {
          $('.container-reply h2,.animation-bg span').addClass('aos-animate');
      }, 400);


    $('.next-1').on('click',function(){
        AOS.init();
      $('.answer h2').text(domanda_2);
      $('.box:first-child').attr('data-success','true').find('h3').text(r_5);
      $('.box:first-child').find('img').attr('src','assets/img/5.png');
      $('.box:nth-child(2)').attr('data-success','false').find('h3').text(r_6);
      $('.box:nth-child(2)').find('img').attr('src','assets/img/6.png');
      $('.box:nth-child(3)').attr('data-success','false').find('h3').text(r_7);
      $('.box:nth-child(3)').find('img').attr('src','assets/img/7.png')
      $('.box:nth-child(4)').attr('data-success','false').find('h3').text(r_8);
      $('.box:nth-child(4)').find('img').attr('src','assets/img/8.png');
      $(this).hide();
      $('.next-2').show();
      $('.success-reply,.failure-reply').removeClass('visible');
      $('.container-reply.activate').removeClass('activate');
      $('.failure-reply,.success-reply').removeClass('activate');
      setTimeout(function() {
          $('.container-reply h2,.animation-bg span,.img-reply,.next_answer a').addClass('aos-animate');
      }, 400);
    });

    // $('.next-2').click(function(){
    //   AOS.init();
    //   $('.answer h2').text(domanda_3);
    //   $('.box:first-child').attr('data-success','false').find('h3').text(r_9);
    //   $('.box:first-child').find('img').attr('src','assets/img/9.png');
    //   $('.box:nth-child(2)').attr('data-success','true').find('h3').text(r_10);
    //   $('.box:nth-child(2)').find('img').attr('src','assets/img/10.png');
    //   $('.box:nth-child(3)').attr('data-success','false').find('h3').text(r_11);
    //   $('.box:nth-child(3)').find('img').attr('src','assets/img/11.png')
    //   $('.box:nth-child(4)').attr('data-success','false').find('h3').text(r_12);
    //   $('.box:nth-child(4)').find('img').attr('src','assets/img/12.png');
    //   $(this).hide();
    //   $('.next-3').show();
    //   $('.success-reply,.failure-reply').removeClass('visible');
    //   $('.container-reply.activate').removeClass('activate');
    //   $('.failure-reply,.success-reply').removeClass('activate');
    //   setTimeout(function() {
    //       $('.container-reply h2,.animation-bg span,.img-reply').addClass('aos-animate');
    //   }, 400);
    // });

    $('.next-2').on('click',function(){
      AOS.init();
      $('.answer h2').text(domanda_3);
      $('.box:first-child').attr('data-success','true').find('h3').text(r_9);
      $('.box:first-child').find('img').attr('src','assets/img/9.png');
      $('.box:nth-child(2)').attr('data-success','false').find('h3').text(r_10);
      $('.box:nth-child(2)').find('img').attr('src','assets/img/10.png');
      $('.box:nth-child(3)').attr('data-success','false').find('h3').text(r_11);
      $('.box:nth-child(3)').find('img').attr('src','assets/img/11.png')
      $('.box:nth-child(4)').attr('data-success','false').find('h3').text(r_12);
      $('.box:nth-child(4)').find('img').attr('src','assets/img/12.png');
      $(this).hide();
      $('.success-reply,.failure-reply').removeClass('visible');
      $('.container-reply.activate').removeClass('activate');
      $('.failure-reply,.success-reply').removeClass('activate');
      $('.next-final').show();
    });

    $('.next-3').on('click',function(){
      AOS.init();
      $('.answer h2').text(domanda_4);
      $('.box:first-child').attr('data-success','false').find('h3').text(r_13);
      $('.box:first-child').find('img').attr('src','assets/img/13.png');
      $('.box:nth-child(2)').attr('data-success','true').find('h3').text(r_14);
      $('.box:nth-child(2)').find('img').attr('src','assets/img/14.png');
      $('.box:nth-child(3)').attr('data-success','false').find('h3').text(r_15);
      $('.box:nth-child(3)').find('img').attr('src','assets/img/15.png')
      $('.box:nth-child(4)').attr('data-success','false').find('h3').text(r_16);
      $('.box:nth-child(4)').find('img').attr('src','assets/img/16.png');
      $(this).hide();
      $('.success-reply,.failure-reply').removeClass('visible');
      $('.container-reply.activate').removeClass('activate');
      $('.failure-reply,.success-reply').removeClass('activate');
      $('.next-final').show();
    });

    $('.next-final').on('click',function(){
      AOS.init();
        $('.answer h2').text(domanda_1);
        $('.box:first-child').attr('data-success','false').find('h3').text(r_1);
        $('.box:first-child').find('img').attr('src','assets/img/1.png');
        $('.box:nth-child(2)').attr('data-success','true').find('h3').text(r_2);
        $('.box:nth-child(2)').find('img').attr('src','assets/img/2.png');
        $('.box:nth-child(3)').attr('data-success','false').find('h3').text(r_3);
        $('.box:nth-child(3)').find('img').attr('src','assets/img/3.png')
        $('.box:nth-child(4)').attr('data-success','false').find('h3').text(r_4);
        $('.box:nth-child(4)').find('img').attr('src','assets/img/4.png');
        $('.load-video').removeClass('none');
        $('.success-reply,.failure-reply').removeClass('visible');
        $('.container-reply.activate').removeClass('activate');
        $('.failure-reply,.success-reply').removeClass('activate');
        $(this).hide();
        $('.next-1').show();
    });

    $('.back').on('click',function(){
      AOS.init();
      $('.success-reply,.failure-reply').removeClass('visible');
      $('.container-reply.activate').removeClass('activate');
      $('.failure-reply,.success-reply').removeClass('activate');
    });


});
