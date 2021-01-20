const burger = document.getElementById("app-burger");
const filter = document.getElementById("app-filter");
const nextButton = document.getElementsByClassName("next-button")[0];
const previousButton = document.getElementsByClassName("previous-button")[0];
const slider = document.getElementsByClassName("content")[0];
const linksSlider = slider.children;
let sliderCounter = 0;

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

nextButton.addEventListener("click", next);
previousButton.addEventListener("click", previous)



function displayMenu() {
  burger.classList.toggle("display");
  filter.classList.toggle("display");
}

function next() {
  sliderCounter++;
  updateSlider();
}

function previous() {
  sliderCounter--;
  updateSlider();
}

function updateSlider() {
    console.log(sliderCounter)
}