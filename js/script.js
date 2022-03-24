$(document).ready(function(){



  //Header
  $('body').css('padding-top', $('header').outerHeight())



  //Sliders
  $('.mainscreen__slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true
  })

  $('.instant__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    appendArrows: $('.instant__arrows'),
    prevArrow: '<div class="arrow _left"><img src="img/i_arrow_left.svg" alt="" class="arrow__img"></div>',
    nextArrow: '<div class="arrow _right"><img src="img/i_arrow_right.svg" alt="" class="arrow__img"></div>',
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.care__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    appendArrows: $('.care__arrows'),
    prevArrow: '<div class="arrow _left"><img src="img/i_arrow_left.svg" alt="" class="arrow__img"></div>',
    nextArrow: '<div class="arrow _right"><img src="img/i_arrow_right.svg" alt="" class="arrow__img"></div>',
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $('.restrict__slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    appendArrows: $('.restrict__arrows'),
    prevArrow: '<div class="arrow _left"><img src="img/i_arrow_left.svg" alt="" class="arrow__img"></div>',
    nextArrow: '<div class="arrow _right"><img src="img/i_arrow_right.svg" alt="" class="arrow__img"></div>',
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })



  //Tabs
  $('.question__item').click(function() {
    if ($(this).hasClass('_open')) {
      $(this).removeClass('_open')
    } else {
      $(this).addClass('_open')
    }
  })



  //Resize button
  $('.preparation__btn').click(function() {
    let item = $('.preparation__list')
    if (item.hasClass('_open')) {
      item.removeClass('_open')
      $(this).removeClass('_open')
      $(this).text('посмотреть все')
    } else {
      item.addClass('_open')
      $(this).addClass('_open')
      $(this).text('закрыть')
    }
  })



  //Menu
  $('.header__menu-btn').click(() => {
      $('.header__menu').addClass('_open')
  })
  $('.header__menu-close').click(() => {
    $('.header__menu').removeClass('_open')
  })



  //Open popup
  $('[open-popup]').click(function(e) {
    e.preventDefault()
    let popup = $(this).attr('href')
    $(popup).addClass('_open')
  })
  $('.popup__btn-close').click(function() {
    $(this).closest('.popup__wrapper').removeClass('_open')
  })



  //Animate
  class Animate {
    constructor(section) {
      if (section.length) {
        
        if (section.offset().top <= $(window).scrollTop() + $(window).height() - 300) {
          $.each(section.find('[animate]'), function() {
            $(this).attr('animate', 'end')
            setTimeout(() => {
              section.removeClass('_animate-start')
            },2000)
          })
        }

        $(window).scroll(function() {
          if (section.offset().top<= $(window).scrollTop() + $(window).height() - 250) {
            $.each(section.find('[animate]'), function() {
              $(this).attr('animate', 'end')
            })
          }
        })

      }
    }
  }
  let header_anim = new Animate($('#header'))
  let mainscreen_anim = new Animate($('#mainscreen'))
  let advantage_anim = new Animate($('#advantage'))
  let instant_anim = new Animate($('#instant'))
  let about_anim = new Animate($('#about'))
  let preparation_anim = new Animate($('#preparation'))
  let care_anim = new Animate($('#care'))
  let question_anim = new Animate($('#question'))
  let study_anim = new Animate($('#study'))



  //Slide to section
	$('a._anchor[href]').on('click', function (e) {
		let href = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(href).offset().top
		}, {
			duration: 1000,
		});
		return false;
	})



  //Submit data
  $('#form-callback').on('submit', function(e) {
    e.preventDefault()
    let data = $(e.target).serialize()

    $.post('form.php', data, function (res) {
      let result = JSON.parse(res)
      
      if (result.success == "1") {
        $('#result .popup__title').text("Ваши данные успешно отправленны!")
      } else {
        $('#result .popup__title').text("Произошла ошибка. Попробуйте повторить позже.")
      }

      $('#result').addClass('_open')
    })

  })



})