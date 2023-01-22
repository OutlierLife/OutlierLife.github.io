var quotes = document.querySelectorAll(".quote-slide");
var currentSlide = 0;
var nextBtn = document.getElementById("next-btn");
var prevBtn = document.getElementById("prev-btn");

function moveToSlide(n) {
  quotes[currentSlide].classList.remove("active-slide");
  currentSlide = (n + quotes.length) % quotes.length;
  quotes[currentSlide].classList.add("active-slide");
}

function nextSlide() {
  moveToSlide(currentSlide + 1);
}

function prevSlide() {
  moveToSlide(currentSlide - 1);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 3000);








var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});