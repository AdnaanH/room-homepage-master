const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentSlideIndex = 0;


function showSlide() {
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlideIndex ? "flex" : "none";
  });
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide();
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide();
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

showSlide();


const hamMenu = document.getElementById('ham-menu');
const mobMenu = document.getElementById('menu')

hamMenu.addEventListener('click', function () {
    mobMenu.style.display = 'flex'
    console.log('click')
})
