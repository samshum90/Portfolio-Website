// 
// const navButtons = document.querySelectorAll(".topnav li");
// const containers = document.querySelectorAll("main > div"); //get the immediate children of the main tag
//
// //scroll to correct part on click of nav buttons
// navButtons.forEach((navButton, i) => {
//   navButton.addEventListener("click", () => {
//     let pos = containers[i].getBoundingClientRect().top - 10;
//     window.scrollBy({
//       top: pos,
//       behavior: "smooth"
//     });
//   });
// });

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    // navbar.classList.add("solid-nav")
  } else {
    // navbar.classlist.remove("solid-nav")
    navbar.classList.remove("sticky");
  }
}


// transparent to solid nav bar
