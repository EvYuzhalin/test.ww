// slider 

$(function(){
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
