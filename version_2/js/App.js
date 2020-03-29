// When the user scrolls the page, execute myFunction
window.addEventListener('scroll', myFunction);

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var navBarSticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= navBarSticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
};

// project Box animations
document.addEventListener('DOMContentLoaded', () =>{

  const petShopGif = document.querySelector("#Pet-shop-gif");
  const petShopDes = document.querySelector("#Pet-shop-des");
  petShopGif.addEventListener("mouseover", () => {
    petShopGif.src = ("images/Pet_shop.gif");
    petShopDes.classList.add("mouseover")
  });
  petShopGif.addEventListener("mouseout", () => {
    petShopGif.src = ("images/Pet_shop.png");
    petShopDes.classList.remove("mouseover")
  });
});
