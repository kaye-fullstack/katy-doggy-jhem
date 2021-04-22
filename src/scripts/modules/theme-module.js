AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

  const swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  const swiperBanner = new Swiper('.swiper-banner .swiper-container', {
    // autoplay: {
    // delay: 2500,
    // disableOnInteraction: false,
    // },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiperQuotes = new Swiper('.swiper-quotes .swiper-container', {
    // autoplay: {
    // delay: 2500,
    // disableOnInteraction: false,
    // },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
    },
  });

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _swiperBanner();
    _swiperQuotes();
  };

  return {
    init: init,
  };
})();
