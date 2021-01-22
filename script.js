const burger = document.getElementById("app-burger");
const filter = document.getElementById("app-filter");
const nextButton = document.getElementsByClassName("next-button")[0];
const previousButton = document.getElementsByClassName("previous-button")[0];
const carouSlides = document.getElementsByClassName("slides")[0];
const numberOfImages = carouSlides.children.length;
const slides = document.getElementsByClassName("content")[0];
const linksSlides = slides.children;
let numberOfLinksSlides = linksSlides.length;
let sliderCounter = 0;
let carouCounter = 0;

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

nextButton.addEventListener("click", nextCarou);
previousButton.addEventListener("click", prevCarou)

setInterval(nextSlider, 5000);
setInterval(nextCarou, 4000);


function displayMenu() {
    burger.classList.toggle("display");
    filter.classList.toggle("display");
}

function nextSlider() {
    sliderCounter++;
    if (sliderCounter > numberOfLinksSlides - 1) {
        sliderCounter = 0;
    }
    updateSlider();
}

function updateSlider() {
    const transform = -100 * sliderCounter;
    slides.style.transform = `translateX(${transform}vw)`;
}

function nextCarou() {
    carouCounter++;
    if (carouCounter > numberOfImages - 1) {
        carouCounter = 0;
    }
    updateCarou();
}

function prevCarou() {
    carouCounter--;
    if (carouCounter < 0) {
        carouCounter = numberOfImages - 1;
    }
    updateCarou();
}

function updateCarou() {
    const transform = -50 * carouCounter;
    carouSlides.style.transform = `translateX(${transform}%)`;
}

// function swipedetect(el, callback){

//     var touchsurface = el,
//     swipedir,
//     startX,
//     startY,
//     distX,
//     distY,
//     threshold = 150, //required min distance traveled to be considered swipe
//     restraint = 100, // maximum distance allowed at the same time in perpendicular direction
//     allowedTime = 300, // maximum time allowed to travel that distance
//     elapsedTime,
//     startTime,
//     handleswipe = callback || function(swipedir){}

//     touchsurface.addEventListener('touchstart', function(e){
//         var touchobj = e.changedTouches[0]
//         swipedir = 'none'
//         dist = 0
//         startX = touchobj.pageX
//         startY = touchobj.pageY
//         startTime = new Date().getTime() // record time when finger first makes contact with surface
//         e.preventDefault()
//     }, false)

//     touchsurface.addEventListener('touchmove', function(e){
//         e.preventDefault() // prevent scrolling when inside DIV
//     }, false)

//     touchsurface.addEventListener('touchend', function(e){
//         var touchobj = e.changedTouches[0]
//         distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
//         distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
//         elapsedTime = new Date().getTime() - startTime // get time elapsed
//         if (elapsedTime <= allowedTime){ // first condition for awipe met
//             if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
//                 swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
//             }
//             else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
//                 swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
//             }
//         }
//         handleswipe(swipedir)
//         e.preventDefault()
//     }, false)
// }

// //USAGE:

// let el = document.getElementById('slider-caroussel');
// swipedetect(el, function(swipedir){
//   switch(swipedir) {
//     case "right":
//       prev();
//       break;
//     case "left":
//       next();
//       break;
//     default:
//       break;
//   }
// });