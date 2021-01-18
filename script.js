const burger = document.getElementById("app-burger");

burger.addEventListener("click", displayMenu);

function displayMenu(){
  burger.classList.toggle("display")
}