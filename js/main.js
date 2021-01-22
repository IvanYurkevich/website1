
$(document).ready(function(){
  $('.slider').slick({
  slidesToScroll: 4,
  slidesToShow: 4,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class=prevarrow> </button>',
        nextArrow: '<button class=nextArrow> </button>',
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class=prevarrow> </button>',
        nextArrow: '<button class=nextArrow> </button>',
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});