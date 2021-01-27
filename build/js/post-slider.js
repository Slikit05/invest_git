$(document).ready(function () {
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 32,
    slidesPerView: 4,
    // freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // direction: 'vertical',
    // autoHeight: true,
    // mousewheel: true,
    breakpoints: {
      575: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 0,
      },
    }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    // navigation: {
    //   nextEl: '.news-inner-slider__arrow--next',
    //   prevEl: '.news-inner-slider__arrow--prev',
    // },
    thumbs: {
      swiper: galleryThumbs
    }
  });

  var maxSlide = $('.post-inner-slider__slide-sm').length;
  $('.post-inner-slider__number').html(maxSlide - 4);

  $('.post-inner-slider__slide-sm').click(function () {
    if ($(this).hasClass('post-inner-slider__slide-sm--value')) {

    } else {
      return false;
    }
  });

  var cloneImg = $('.post-inner-slider__up').find('.post-inner-slider__img-lg').clone();

  $('.post-inner-slider__slide-sm--value').append($('<div>', {
    'class': 'post-inner-slider__gallery'
  }).hide().append(cloneImg));

  $('.post-inner-slider__slide-sm--value').on('click', function () {
    $.fancybox.open($('.post-inner-slider__gallery img'), {
      touch: false,
      infobar: false
    });
  });
});