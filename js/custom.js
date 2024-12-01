$(document).ready(function(){
    $(".menu-toggle").click(function(){
      $("body").addClass("toggle");
      $(".closed-menu").click(function(){
        $("body").removeClass("toggle");
      });
    });


  });





// scroll to top 

var amountScrolled = 200;
var amountScrolledNav = 25;

$(window).scroll(function() {
  if ( $(window).scrollTop() > amountScrolled ) {
    $('button.back-to-top').addClass('show');
  } else {
    $('button.back-to-top').removeClass('show');
  }
});

$('button.back-to-top').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 800);
  return false;
});

// scroll to top 



// scroll to bottom 

var amountScrolled = 200; // Adjust threshold as needed

$(window).scroll(function () {
  // Show the button if scrolled less than the full height minus the viewport height
  if ($(window).scrollTop() < $(document).height() - $(window).height() - amountScrolled) {
    $('.back-to-bottom').addClass('show');
  } else {
    $('.back-to-bottom').removeClass('show');
  }
});

$('.back-to-bottom').click(function () {
  $('html, body').animate({
    scrollTop: $(document).height() - $(window).height(), // Scroll to the bottom
  }, 800);
  return false;
});

// scroll to bottom 


// Listing Slider
var listingSwiper = new Swiper(".listing-slider", {
  slidesPerView: 3.5,
  spaceBetween: 30,
  freeMode: true,
  navigation: {
    nextEl: ".listing-next", // Unique selector
    prevEl: ".listing-prev", // Unique selector
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    575: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    1200: {
      slidesPerView: 2.8,
      spaceBetween: 12,
    },
    1400: {
      slidesPerView: 3.2,
      spaceBetween: 12,
    },
    1600: {
      slidesPerView: 3.6,
      spaceBetween: 12,
    },
  },
});


// Showcase Slider
var showcaseSwiper = new Swiper(".showcase-slider", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".showcase-next", // Unique selector
    prevEl: ".showcase-prev", // Unique selector
  },
  pagination: {
    el: ".showcase-pagination", // Unique selector
    clickable: true,
  },
});


var swiper = new Swiper('.awards-slider', {
  slidesPerView: 8, 
  spaceBetween: 42, 
  autoplay: {
    delay: 1500, 
    disableOnInteraction: false, // Keep autoplaying after interactions
  },
  loop: true, 
  breakpoints: {
    320: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 8,
    },
  },
});
