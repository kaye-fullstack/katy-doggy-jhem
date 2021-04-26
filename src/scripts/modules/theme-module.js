AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff
  
    function lockScroll() {
      if ($('body').hasClass('lock-scroll')) {
          $('body').removeClass('lock-scroll');
      }
      else {
          $('body').addClass('lock-scroll');
      }
    }  
    
    $(document).ready(function() {
      $('.icon-bar').click(function() {
         lockScroll();
      }); 
    });
  
  const swiper = new Swiper('.swiper-container', {
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },

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

  $('body').scrollspy({
    target: '.paw-scrollspy'
  });

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();
    _swiperBanner();
    _swiperQuotes();
    _lockScroll();
  };

  return {
    init: init,
  };
})();
