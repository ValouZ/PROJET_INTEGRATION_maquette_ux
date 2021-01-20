const burger = document.getElementById("app-burger");
const filter = document.getElementById("app-filter");

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

function displayMenu(){
  burger.classList.toggle("display");
  filter.classList.toggle("display");
}