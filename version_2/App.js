

// When the user scrolls the page, execute myHeaderFunction
window.onscroll = function() {myHeaderFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myHeaderFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    // navbar.classList.add("solid-nav")
  } else {
    // navbar.classlist.remove("solid-nav")
    navbar.classList.remove("sticky");
  }
}



// Get the Element
var prodes = document.getElementsByClassName("pro-des");
var box = document.getElementsByClassName("pro-box");

// when the user mouseovers box excecute Function
// box.onmouseover = function() {mouseOver()};


box.onmouseover = function() {
  prodes.classList.add("pro-des-hidden");
}
box.onmouseout = function() {
  prodes.classList.remove("pro-des-hidden");
}
