document.addEventListener("DOMContentLoaded", function(event) {
  const menuHamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const portfolioMenu = document.querySelector('.portfolio-mobile-menu');
  const portfolioOpen = document.getElementById('portfolio-menu');
  const backMenu = document.getElementById('back-menu');
  const menuItems = document.querySelectorAll('.mobile-menu .mobile-nav ul li')

  menuHamburger.addEventListener('click', function() {
    if (menuHamburger.classList.contains('open')) {
      menuHamburger.classList.remove('open')
      mobileMenu.style.left = '-100%'
      portfolioMenu.style.right = '-100%'
    } else {
      menuHamburger.classList.add('open')
      mobileMenu.style.left = '0'
    }
  })

  backMenu.addEventListener('click', function() {
    mobileMenu.style.left = '0'
    portfolioMenu.style.right = '-100%'
  })

  portfolioOpen.addEventListener('click', function() {
    mobileMenu.style.left = '-100%'
    portfolioMenu.style.right = '0'
  })

  TweenMax.to(".flex-items", 2, {
    opacity: 0,
    y: -60,
    delay: 1,
    ease: Expo.easeInOut,
  });

  gsap.to(".loader", {duration: 1, y: '-100%', ease: "easeIn", delay: 2});

  TweenMax.from(".logo", 3, {
    opacity: 0,
    x: -60,
    delay: 1.5,
    ease: Expo.easeInOut,
  });

  TweenMax.from(".hamburger", 3, {
    opacity: 0,
    x: -60,
    delay: 1,
    ease: Expo.easeInOut,
  });

  TweenMax.from(
    "#slider",
    2,
    {
      opacity: 0,
      delay: 1.5,
      ease: Power3.easeInOut,
    },
    0.02
  );

  AOS.init({
    easing: "ease-out-quart",
    duration: 1000,
    once: true
  });

  let typedToggle = false
  let typedToggle2 = false

  window.addEventListener('scroll', function(e) {
    if (window.scrollY > 270) {
      if (!typedToggle) {
        setTimeout(function() {
          var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            typeSpeed: 55,
            showCursor: false
          });
        }, 250)
      }
      typedToggle = true
    }

    if (window.scrollY > 1950) {
      if (!typedToggle2) {
        setTimeout(function() {
          var typed = new Typed('#typed2', {
            stringsElement: '#typed-strings2',
            typeSpeed: 55,
            showCursor: false
          });
        }, 500)
      }
      typedToggle2 = true
    }
  })

  const fotografiaLetters = document.querySelectorAll('.flex-items p span');

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    spaceBetween: 100,
    slidesPerView: 1
  });
});
