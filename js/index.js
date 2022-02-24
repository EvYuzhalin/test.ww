// slider 
$(document).ready(function() {
    if ( $(window).width() > 1279 ) {
        startOwl();
    } else {
      $('.owl-carousel').addClass('off');
    }
  });
  
  $(window).resize(function() {
      if ( $(window).width() > 1279 ) {
        startOwl();
      } else {
        stopCarousel();
      }
  });

$(function startOwl(){
    $('.slider1').owlCarousel({
        items: 1,
        autoWidth: 1280,
        dots: false,
        nav: true,
        margin: 0,
    });
    $('.slider2').owlCarousel({
        items: 1,
        autoWidth: 1280,
        dots: false,
        nav: true,
        margin: 0,
        margin: 12
    }
        
    );

  });
  function stopCarousel() {
    let owl = $('.owl-carousel');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
  }

//   modal open 

$(document).ready(function(){
	/*Открыть модальное окно*/
	$('.menu__butt').click(function(){
		$('.menu__mobile').css({'display': 'block'});
	});
	/*Закрыть модальное окно*/
	$('.close').click(function(){
		$('.menu__mobile').css({'display': 'none'});
	});


	$('.top__button').click(function(){
		$('.modal__block').css({'display': 'flex'});
	});

	$('.close_modal').click(function(){
		$('.modal__block').css({'display': 'none'});
	});
});
