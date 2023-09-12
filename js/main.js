$(function () {
	
	

    $('.toggle_btn').on('click', function () {
      if ($('#header').hasClass('open')) {
        $('#header').removeClass('open');
      } else {
        $('#header').addClass('open');
      }
    });
  
  
    $('#mask').on('click', function () {
      $('#header').removeClass('open');
    });
  
  
    /*-------------ローディングアニメーション---------------*/
  
    /* function end_loader() {
      $('.loader').fadeOut(800);
    }
    $(window).on('load', function () {
      setTimeout(function () {
        end_loader();
      }, 3000)
    });
  });*/
    window.onload = function () {
      const spinner = document.getElementById('loading');
      spinner.classList.add('loaded');
    }
  
    /*-------------ドロップダウンメニュー---------------*/
  $('.menu li').hover(function(){
      $(this).children('.menuSub').addClass('open');
  },
  function(){
      $(this).children('.menuSub').removeClass('open');
  });
    
    /*-------------モーダルウィンドウ---------------*/
  
    /*const buttonOpen = document.getElementById('modalOpen');
        const modal = document.getElementById('easyModal');
        const buttonClose = document.getElementById('modalClose');
        
        // ボタンがクリックされた時
        buttonOpen.addEventListener('click',modalOpen);
        function modalOpen(){
            modal.style.display = 'block';
        }
        
        // バツ印がクリックされた時
        buttonClose.addEventListener('click',modalClose);
        function modalClose(){
            modal.style.display = 'none';
        }
        
        // モーダルコンテンツ以外がクリックされた時
        addEventListener('click',outsideClose);
        function outsideClose(e){
            if(e.target == modal){
                modal.style.display = 'none';
                
            }
        }*/
  
    /*----------------------------*/
  $(document).on('ready', function() {
    $(".vertical-center-2").slick({
      dots: true,
      vertical: true,
      verticalSwiping: true,
      centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1
    });
  });
  
    /*-------------プラグイン---------------*/
  
    $('.slick-area').slick({
      arrows: false,
      centerMode: true,
      centerPadding: '50px',
      slidesToShow: 3,
      responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: '50px',
          slidesToShow: 1
        }
      }]
    });
  
    /*----------------------------*/
  
    const stalker = document.getElementById('mouse-stalker');
    let hovFlag = false;
  
    document.addEventListener('mousemove', function (e) {
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    });
  
    const linkElem = document.querySelectorAll('a:not(.no_stick_)');
    for (let i = 0; i < linkElem.length; i++) {
      linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;
        stalker.classList.add('is_active');
  
      });
      linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('is_active');
      });
    }
  
    /*----------------------------*/
  
    $(window).scroll(function () {
      $('.fadein').each(function () {
        let scroll = $(window).scrollTop();
        let target = $(this).offset().top;
        let windowHeight = $(window).height();
  
        if (scroll > target - windowHeight + 200) {
          $(this).css('opacity', '1');
          $(this).css('transform', 'translate(0)');
        }
  
      });
    });
      
      
  
  
  }); // JavaScript Document
  
  
  
  