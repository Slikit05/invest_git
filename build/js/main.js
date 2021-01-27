$(document).ready(function () {

  $('.navigation__item--dropdown .navigation__item-wrap-flex').click(function () {
    $(this).toggleClass('navigation__item-wrap-flex--open');
    $(this).closest('.navigation__item--dropdown').find('.navigation-dropdown-two').slideToggle();
  });

  if ($(window).width() <= '991') {
    $('.bread-crumbs__list').scrollLeft($(this).height())
  };

  $('.header-page__field-select').click(function () {
    $(this).closest('.header-page__nav').toggleClass('header-page__nav--open');
    $(this).closest('.header-page__nav').find('.header-page__list').slideToggle();
  });

  if ($(window).width() <= '1024') {
    $(document).mouseup(function (e) { // событие клика по веб-документу
      var citySelect = $(".header-page__nav"); // тут указываем ID элемента
      if (!citySelect.is(e.target) // если клик был не по нашему блоку
        &&
        citySelect.has(e.target).length === 0) { // и не по его дочерним элементам      
        citySelect.find('.header-page__list').slideUp();
        citySelect.removeClass('header-page__nav--open');
      }
    });
  }

  function isInternetExplorer() {
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
  }

  if (isInternetExplorer() === false) {
    console.log('Браузер не IE');
  } else {
    console.log('Сочувствую, но ваш браузер IE');
    var swiperFirst = new Swiper('.first-screen__slider', {
      slidesPerView: 'auto',
      spaceBetween: 1,
      speed: 1000,
      watchOverflow: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        type: 'bullets',
        clickable: true,
        el: '.first-screen__pagination',
      },
    });
  }


  function IsSafari() {
    var is_safari = navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
    return is_safari;
  }

  if (IsSafari() === false) {} else {
    $('.nav-mobile').addClass('bottom-offset');
  }

  // адаптивная навигация --------------------------
  var aNavItems = [];
  var totalWidth = 0;
  $('#navigationList > .navigation__item:not(.navigation__item--more)').each(function (index) {
    let $this = $(this);
    let width = $this.innerWidth();

    // console.log(index, $this, 'width ' + width);
    totalWidth += parseInt(width);
    aNavItems.push({
      'outerWidth': totalWidth,
      'element': this,
      '$element': $this
    });
  });
  var resizeWidth = $(window).width();
  var bIsShrink = false;


  function __navItemMagic(bForceIsShrink) {
    var bForceIsShrink = bForceIsShrink || false;
    // console.log('__navItemMagic', 'BEGIN');
    bIsShrink = $(window).width() < resizeWidth;
    resizeWidth = $(window).width();

    if (bForceIsShrink === true) {
      bIsShrink = true;
    }
    var widthWrapItem = $('#navigationList').width(),
      _widthWrapItem = widthWrapItem - $('#navigationList > .navigation__item--more').innerWidth();
    item = $('.navigation__item');

    // console.log(item);
    var totalWidth = 0;
    $('#navigationList > .navigation__item:not(.navigation__item--more)').each(function (index) {
      let $this = $(this);
      let width = $this.innerWidth();

      // console.log(index, $this, 'width ' + width);
      totalWidth += parseInt(width);
    });
    // console.log(_widthWrapItem);
    if (aNavItems.length) {
      for (var i = 0, l = aNavItems.length; i < l; i++) {
        let item = aNavItems[i];

        // console.log($('#navigationList').find(item.element));
        // console.log(item.element, bIsShrink, item.outerWidth >= _widthWrapItem);
        if (bIsShrink === true && item.outerWidth >= _widthWrapItem) {
          // console.log('1111111111111111');
          if ($('#navigationList').find(item.element).length) {
            $('#navigationList').find(item.element).remove();
          }
          if (!$('#navigationList > .navigation__item--more .navigation-dropdown').find(item.element).length) {
            $('#navigationList > .navigation__item--more .navigation-dropdown').append(item.element);
          }
        } else if (bIsShrink === false && item.outerWidth < _widthWrapItem) {

          if (!$('#navigationList').find(item.element).length) {
            $('#navigationList').append(item.element);
          }
          if ($('#navigationList > .navigation__item--more .navigation-dropdown').find(item.element).length) {
            $('#navigationList > .navigation__item--more .navigation-dropdown').find(item.element).remove();
          }
        }
      }
    }
    // console.log('__navItemMagic', 'END');
  }

  if ($(window).width() >= '991') {
    $(window).resize(function () {
      __navItemMagic();
    });
  };
  __navItemMagic(true);

  // адаптивная навигация - конец --------------------------

  $('.burger').click(function () {
    $('html').toggleClass('hiden');
    $(this).toggleClass('burger--open');
    $('.mobile-menu').toggleClass('mobile-menu--open');
  });

  $('.nav-mobile__row').click(function () {
    if ($(this).closest('.nav-mobile__item').find('.nav-mobile-drop').length) {
      $(this).toggleClass('nav-mobile__row--open')
      event.preventDefault();
    }
    $(this).closest('.nav-mobile__item').find('.nav-mobile-drop').toggleClass('nav-mobile-drop--open');
    $(this).closest('.nav-mobile__item').find('.nav-mobile-drop').slideToggle();
  });

  $('.select-field__select').select2({
    minimumResultsForSearch: -1,
    width: '100%',
    language: 'ru',
    scrollAfterSelect: true,
  });

  $(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > $(window).height() / 2) {
        $('.link-up').addClass('link-up--show');
      } else {
        $('.link-up').removeClass('link-up--show');
      }
    });
    $('.link-up').click(function () {
      $('html,body').animate({
        scrollTop: 0
      }, 1000);
    });
  });

  $('.accordion__up').click(function () {
    $(this).closest('.accordion').find('.accordion__content').slideToggle();
    $(this).find('.accordion__arrow').toggleClass('accordion__arrow--open');
    $(this).closest('.accordion').toggleClass('accordion--open');
  });


  // Модалка
  $('.show_popup').click(function () {
    var popup_id = $('#' + $(this).attr('rel'));
    $(popup_id).show();
    $(popup_id).find('.my-modal').addClass('modal-open');
    $('html').addClass('hiden');
    return false;
  });
  $('.close-popup').click(function () {
    $(this).closest('.my-modal').removeClass('modal-open');
    $(this).closest('.modal-container').hide();

    if ($('.my-modal').hasClass('modal-open')) {
      $('html').addClass('hiden');
    } else {
      $('html').removeClass('hiden');
    }
  });

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var customSelect = $(".filter-select"); // тут указываем ID элемента
    if (!customSelect.is(e.target) // если клик был не по нашему блоку
      &&
      customSelect.has(e.target).length === 0) { // и не по его дочерним элементам
      customSelect.find('.filter-select__drop-down').slideUp();
      customSelect.removeClass('filter-select--active');
    }
  });


  //слайдеры

  // if ($(window).width() <= '1200') {
  //   var swiper = new Swiper('.best-offers__slider', {
  //     slidesPerView: 2,
  //     spaceBetween: 32,
  //     // slidesOffsetAfter: 48,
  //     navigation: {
  //       nextEl: '.best-offers__arrow--next',
  //       prevEl: '.best-offers__arrow--prev',
  //     },
  //     breakpoints: {
  //       575: {
  //         slidesPerView: 'auto',
  //         spaceBetween: 16,
  //       }
  //     },
  //   })
  // };

  var swiper = new Swiper('.best-offers__slider', {
    slidesPerView: 3,
    spaceBetween: 32,
    watchOverflow: true,
    navigation: {
      nextEl: '.best-offers__arrow--next',
      prevEl: '.best-offers__arrow--prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
      575: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freeMode: true,
      },
    },
  })

  if ($(window).width() <= '575') {
    $('.footer-nav__up').click(function () {
      $(this).closest('.footer-nav').find('.footer-list').slideToggle();
      $(this).toggleClass('footer-nav__up--open');
    })
  };

  $("#loan-amount").slider({
    range: "min",
    // value: 500000,
    min: 90000,
    max: 5000000,
    // slide: function (event, ui) {
    //   $("#amount").val(ui.value.toLocaleString());
    // }
  });

  $("#price-rahge").slider({
    range: true,
    min: 2400,
    max: 121000,
    values: [2400, 121000],
    // slide: function (event, ui) {
    //   $("#price-start").val(ui.values[0].toLocaleString());
    //   $("#price-final").val(ui.values[1].toLocaleString());
    // }
  });

  $("#age-slider").slider({
    range: "min",
    min: 12,
    max: 60,
    value: 1,
    // slide: function (event, ui) {
    //   var value = ui.value;
    //   var years = Math.floor(value / 12);
    //   var months = value - years * 12;
    //   var strResult = "";
    //   strResult = years;
    //   if (years) {
    //     if (years == 1) {
    //       strResult += ' год';
    //     } else if (years > 1 && years < 5) {
    //       strResult += ' года';

    //     } else {
    //       strResult += ' лет';
    //     }
    //   }
    //   if (months > 0) {
    //     strResult += ' ' + months;
    //     if (months == 1) {
    //       strResult += ' месяц';
    //     } else if (months > 1 && months < 5) {
    //       strResult += ' месяца';

    //     } else {
    //       strResult += ' месяцев';
    //     }
    //   }
    //   $('#age').val(strResult);
    // }
  });

  $('.search-icon').click(function () {
    $('.search-line').addClass('search-line--open');
    $('html').addClass('overlay-bg');
  });

  $('.search-line__close').click(function () {
    $(this).closest('.search-line').removeClass('search-line--open');
    $(this).closest('.search-line').find('.search-line__field').val('');
    $('html').removeClass('overlay-bg');
  });

  $(document).mouseup(function (e) { // событие клика по веб-документу
    var searchField = $(".search-line"); // тут указываем ID элемента
    if (!searchField.is(e.target) // если клик был не по нашему блоку
      &&
      searchField.has(e.target).length === 0) { // и не по его дочерним элементам
      searchField.removeClass('search-line--open');
      searchField.find('.search-line__field').val('');
      $('html').removeClass('overlay-bg');
    }
  });




  // var mySwiper = new Swiper('.first-screen__slider', {
  //   speed: 700,
  //   spaceBetween: 0
  // });
  // // Переключение табов преимуществ, которые идут на всю ширину экрана //
  // $('.advantages__tab').on('click', function (e) {
  //   e.preventDefault();
  //   $('.advantages__tab.active').removeClass('active');
  //   $(this).addClass('active')

  //   href = '#' + $(this).data('id')
  //   $(href).siblings('.advantages__content.active').animate({
  //     opacity: 0
  //   }, 400)
  //   /*    $(href).siblings('.advantages__content.active').removeClass('active') */
  //   setTimeout(function () {
  //     $(href).siblings('.advantages__content.active').removeClass('active')
  //   }, 400);
  //   /*    $(href).addClass('active'); */
  //   setTimeout(function () {
  //     $(href).addClass('active')
  //   }, 400);
  //   $(href).animate({
  //     opacity: 1
  //   }, 400)
  // })
  // //----------------------//
});