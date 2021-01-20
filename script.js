const burger = document.getElementById("app-burger");
const filter = document.getElementById("app-filter");
// const nextButton = document.getElementsByClassName("next-button")[0];
// const previousButton = document.getElementsByClassName("previous-button")[0];
const slides = document.getElementsByClassName("content")[0];
const linksSlides = slides.children;
let numberOfLinksSlides = linksSlides.length;
let sliderCounter = -1;

// Event listener used to display the content of the burger menu
// if the window is under 992px of width, we add the event listener 
// attached to the displayBurgerMenu function
if (window.innerWidth < 992)
  burger.addEventListener("click", displayMenu);

window.addEventListener("resize", () => {
  if (window.innerWidth < 992)
    burger.addEventListener("click", displayMenu);
  else
    burger.removeEventListener("click", displayMenu);
  filter.classList.remove("display");
  burger.classList.remove("display");
});

// nextButton.addEventListener("click", next);
// previousButton.addEventListener("click", previous)

setInterval(nextSlider, 5000);


function displayMenu() {
  burger.classList.toggle("display");
  filter.classList.toggle("display");
}

function nextSlider() {
  sliderCounter++;
  if (sliderCounter > numberOfLinksSlides -1) {
    sliderCounter = 0;
  }
  updateSlider();
}

function updateSlider() {
    console.log(sliderCounter)
  const transform = -100 * sliderCounter;
  slides.style.transform = `translateX(${transform}vw)`;
}