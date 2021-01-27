$(document).ready(function () {
  // слайдер с анимацией пагинацией
    var totalSlideGallery = $('.first-screen__slider').find('.first-screen__slide').length;
    $('.first-screen__total').text(totalSlideGallery);

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
        renderBullet: function (index, className) {
          return '<div class="' + '' + '" data-index="' + index + '">' +
            '<progress-ring stroke="4" radius="20" progress="0"></progress-ring>' +
            '</div>';
        },
      },
      breakpoints: {
        991: {
          navigation: {
            nextEl: '.first-screen__arrow--next',
            prevEl: '.first-screen__arrow--prev',
          }
        }
      },
      on: {
        init: function () {

        },
        slideChange: function () {
          var $el = this.$el;
          var $pagination = this.pagination.$el;
          var index = this.activeIndex;
          var $activeBullete = $pagination.find('[data-index="' + index + '"]');
          if ($activeBullete.length) {
            window._sliderProgressValue = 0;
            window._sliderProgressElement = $activeBullete.find('progress-ring')[0];

            if (window._sliderProgressInterval) {
              clearInterval(window._sliderProgressInterval);
            }
            setTimeout(function () {

              window._sliderProgressInterval = setInterval(function()  {
                window._sliderProgressValue += 1;
                var progress = window._sliderProgressValue;
                window._sliderProgressElement.setAttribute('progress', progress);
                if (progress === 100)
                  clearInterval(window._sliderProgressInterval);
              }, 55);
            }, 350);

          };
          $('.first-screen__pagination').find('div').removeClass('bullet-active');
          $($activeBullete).addClass('bullet-active');
          $('.first-screen__current').html(this.realIndex + 1);
        }
      },
    });
    if (swiperFirst.pagination.$el.length) {
      var $pagination = swiperFirst.pagination.$el;
      $pagination.find('[data-index]').on('click', function (e) {
        e.preventDefault();
        var index = $(this).data('index');
        swiperFirst.slideTo(index);
        console.log(this);
      });

    }
    var $el = swiperFirst.$el;
    var $pagination = $el.find('.first-screen__pagination');
    var index = swiperFirst.activeIndex;
    var $activeBullete = $pagination.find('[data-index="' + index + '"]');
    $('.first-screen__pagination').find('div').removeClass('bullet-active');
    $($activeBullete).addClass('bullet-active');
    if ($activeBullete.length) {
      window._sliderProgressValue = 0;
      window._sliderProgressElement = $activeBullete.find('progress-ring')[0];

      if (window._sliderProgressInterval) {
        clearInterval(window._sliderProgressInterval);
      }
      window._sliderProgressInterval = setInterval(function() {
        window._sliderProgressValue += 1;
        var progress = window._sliderProgressValue;
        window._sliderProgressElement.setAttribute('progress', progress);
        if (progress === 100)
          clearInterval(window._sliderProgressInterval);
      }, 40);

    }

    class ProgressRing extends HTMLElement {
      constructor() {
        super();
        const stroke = this.getAttribute('stroke');
        const radius = this.getAttribute('radius');
        const normalizedRadius = radius - stroke * 2;
        this._circumference = normalizedRadius * 2 * Math.PI;

        this._root = this.attachShadow({
          mode: 'open'
        });
        this._root.innerHTML = `
        <svg
          height="${radius * 2}"
          width="${radius * 2}"
         >
           <circle

             stroke-dasharray="${this._circumference} ${this._circumference}"
             style="stroke-dashoffset:${this._circumference}"
             stroke-width="2"
             fill="transparent"
             r="${normalizedRadius}"
             cx="${radius}"
             cy="${radius}"
          />
        </svg>

        <style>
          circle {
            transform: rotate(-90deg);
            transform-origin: 50% 50%;
          }
        </style>
      `;
      }

      setProgress(percent) {
        const offset = this._circumference - (percent / 100 * this._circumference);
        const circle = this._root.querySelector('circle');
        circle.style.strokeDashoffset = offset;
      }

      static get observedAttributes() {
        return ['progress'];
      }

      attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'progress') {
          this.setProgress(newValue);
        }
      }
    };

    window.customElements.define('progress-ring', ProgressRing);
    // слайдер с анимацией пагинацией - конец
});