jQuery(document).ready(function($){
  AOS.init();
  $('.box').removeClass('aos-animate');
  $('.load-video .btn-play').on('click',function(){
    document.getElementById('vid-intro').play();
    $('.load-video').addClass('none');
    $('.start-game').addClass('on');
  });
  $('span.start-game').on('click',function(){
    $('.box').addClass('aos-animate');
    const videoIntro = document.getElementById('vid-intro');
    videoIntro.pause();
    videoIntro.currentTime = 0;
    $('.intro-video').slideToggle().addClass('none');
    $('.container-answer video').attr('src','assets/video/QUIZ ROMANI 3 X/DOMANDA 1 ROMANI.mp4');
    $('.start-game').removeClass('on');
  });
  const boxH = $('.box').outerWidth();
  $('.box').css('height',boxH);
  $('.box').on('click',function(){
    const video_answer = document.getElementById('vid');
    video_answer.pause();
    video_answer.currentTime = 0;
    $('.box,.animation-bg span,.container-reply h2,.img-reply,.next_answer a,.back').removeClass('aos-animate');
    setTimeout(function() {
        $('.container-reply h2,.animation-bg span,.img-reply,.next_answer a,.back').addClass('aos-animate');
    }, 400);
    const data_value = $(this).attr('data-success');
    const color = $(this).attr('data-color');
    if (data_value == 'true') {
        console.log('rispsota giusta');
        $('.container-reply .container-success').css('background', color);
        $('.animation-bg.star').addClass('visible')
        $('.success-reply').addClass('visible');
        $('.failure-reply').removeClass('visible');
        $('.animation-bg.cloud').removeClass('visible');
        document.getElementById('vid-jump').play();
    }else{
      console.log('risposta sbagliata');
      $('.container-reply .container-failure').css('background', color);
      $('.animation-bg.star').removeClass('visible')
      $('.animation-bg.cloud').addClass('visible')
      $('.success-reply').removeClass('visible');
      $('.failure-reply').addClass('visible');
      document.getElementById('vid-triste').play();
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
    let domanda_1 = 'Quali oggetti sono contenuti nelle vetrinette dell’età romana?';
    let domanda_2 = 'Cosa rappresenta l’oggetto in 3D sulla sommità del totem?';
    let domanda_3 = 'Di che materiale erano costruite le strade romane?';
    let domanda_4 = 'domanda 4';
    let video_1 = "assets/video/QUIZ ROMANI 3 X/DOMANDA 1 ROMANI.mp4";
    let video_2 = "assets/video/QUIZ ROMANI 3 X/DOMANDA 2 ROMANI.mp4";
    let video_3 = "assets/video/QUIZ ROMANI 3 X/DOMANDA 3 ROMANI.mp4";
    let r_1 = 'Documenti in pergamena';
    let r_2 = 'Frammenti di vaso';
    let r_3 = 'Oggetti in pietra';
    let r_4 = 'Oggetti da cucina';
    let r_5 = 'Una tomba';
    let r_6 = 'Un letto';
    let r_7 = 'Una cisterna per l’acqua';
    let r_8 = 'Un secchio';
    let r_9 = 'Cemento';
    let r_10 = 'legno';
    let r_11 = 'lastricato';
    let r_12 = 'Terreno battuto';


    $('.back').on('click',function(){
      AOS.init();
      $('.success-reply,.failure-reply').removeClass('visible');
      $('.container-reply.activate').removeClass('activate');
      $('.failure-reply,.success-reply').removeClass('activate');
      const video_bad = document.getElementById('vid-triste');
      video_bad.pause();
      video_bad.currentTime = 0;
      const video_answer = document.getElementById('vid');
      video_answer.play();
      video_answer.currentTime = 0;
    });

    $('.next-start').on('click', function(){
      if ($(this).hasClass('next-start')) {
        AOS.init();
        $(this).removeClass().addClass('next-2');
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
        $('.container-answer video').attr('src',video_2);
        const video_jump = document.getElementById('vid-jump');
        video_jump.pause();
        video_jump.currentTime = 0;
        setTimeout(function() {
            $('.container-reply h2,.animation-bg span,.img-reply,.next_answer a').addClass('aos-animate');
        }, 400);
      }else if ($(this).hasClass('next')) {
        AOS.init();
        $(this).removeClass().addClass('next-1');
        $('.box:first-child').attr('data-success','false').find('h3').text(r_1);
        $('.box:first-child').find('img').attr('src','assets/img/1.png');
        $('.box:nth-child(2)').attr('data-success','true').find('h3').text(r_2);
        $('.box:nth-child(2)').find('img').attr('src','assets/img/2.png');
        $('.box:nth-child(3)').attr('data-success','false').find('h3').text(r_3);
        $('.box:nth-child(3)').find('img').attr('src','assets/img/3.png')
        $('.box:nth-child(4)').attr('data-success','false').find('h3').text(r_4);
        $('.box:nth-child(4)').find('img').attr('src','assets/img/4.png');
        $('.success-reply,.failure-reply').removeClass('visible');
        $('.container-reply.activate').removeClass('activate');
        $('.failure-reply,.success-reply').removeClass('activate');
        $('.answer h2').text(domanda_1);
        const video_jump = document.getElementById('vid-jump');
        video_jump.pause();
        video_jump.currentTime = 0;
        setTimeout(function() {
            $('.container-reply h2,.animation-bg span').addClass('aos-animate');
        }, 400);
      }else if($(this).hasClass('next-1')){
        AOS.init();
        $(this).removeClass().addClass('next-2');
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
        $('.container-answer video').attr('src',video_2);
        const video_jump = document.getElementById('vid-jump');
        video_jump.pause();
        video_jump.currentTime = 0;
        setTimeout(function() {
            $('.container-reply h2,.animation-bg span,.img-reply,.next_answer a').addClass('aos-animate');
        }, 400);
      }else if($(this).hasClass('next-2')){
        AOS.init();
        $(this).removeClass().addClass('next-final');
        $('.answer h2').text(domanda_3);
        $('.box:first-child').attr('data-success','false').find('h3').text(r_9);
        $('.box:first-child').find('img').attr('src','assets/img/9.png');
        $('.box:nth-child(2)').attr('data-success','false').find('h3').text(r_10);
        $('.box:nth-child(2)').find('img').attr('src','assets/img/10.png');
        $('.box:nth-child(3)').attr('data-success','true').find('h3').text(r_11);
        $('.box:nth-child(3)').find('img').attr('src','assets/img/11.png')
        $('.box:nth-child(4)').attr('data-success','false').find('h3').text(r_12);
        $('.box:nth-child(4)').find('img').attr('src','assets/img/12.png');
        $('.success-reply,.failure-reply').removeClass('visible');
        $('.container-reply.activate').removeClass('activate');
        $('.failure-reply,.success-reply').removeClass('activate');
        $('.container-answer video').attr('src',video_3);
        const video_jump = document.getElementById('vid-jump');
        video_jump.pause();
        video_jump.currentTime = 0;
      }else if($(this).hasClass('next-final')){
        AOS.init();
        $('.next-totem').addClass('visible');
        setTimeout(function(){
          $('.next-totem').removeClass('visible');
        },5000);
        $(this).removeClass().addClass('next-1');
        $('.answer h2').text(domanda_1);
        $('.box:first-child').attr('data-success','false').find('h3').text(r_1);
        $('.box:first-child').find('img').attr('src','assets/img/1.png');
        $('.box:nth-child(2)').attr('data-success','true').find('h3').text(r_2);
        $('.box:nth-child(2)').find('img').attr('src','assets/img/2.png');
        $('.box:nth-child(3)').attr('data-success','false').find('h3').text(r_3);
        $('.box:nth-child(3)').find('img').attr('src','assets/img/3.png')
        $('.box:nth-child(4)').attr('data-success','false').find('h3').text(r_4);
        $('.box:nth-child(4)').find('img').attr('src','assets/img/4.png');
        setTimeout(function(){
          $('.load-video').removeClass('none');
          $('.intro-video').slideToggle().removeClass('none');
          $('.success-reply,.failure-reply').removeClass('visible');
          $('.container-reply.activate').removeClass('activate');
          $('.failure-reply,.success-reply').removeClass('activate');
        },500);
        $('.container-answer video').attr('src',video_1);
        const video_jump = document.getElementById('vid-jump');
        video_jump.pause();
        video_jump.currentTime = 0;
        const video_answer = document.getElementById('vid');
        video_answer.pause();
        video_answer.currentTime = 0;
      }
    })


});
